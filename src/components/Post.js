import { View, Text, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { postStyles } from './styles/postStyles'
import { NavigationPathEnum } from '../../core/enum/navigationPathEnum'
import { useSelector } from 'react-redux'
import { createRoom, deleteDocFirestore, deletePostByUser, getRoomIsCreated, setChatUsers } from '../../core/firebase/firebaseFirestore'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { themeColors } from '../../core/enum/themeColorsEnum'


const Post = ({ navigation, isHomePage, postId, userId, title, desc, name, photos, adress, price, location, isFurnished, room }) => {
    const userAuth = useSelector(state => state.auth.userAuth)
    const userInfo = useSelector(state => state.userInfo.userInfo)

    const openChatScreen = () => {
        let users = {
            users: [{
                'uid': userAuth.uid,
                'name': userInfo.name
            },
            {
                'uid': userId,
                'name': name
            }],
        }

        getRoomIsCreated('users', userAuth.uid, 'chatUsers')
            .then(async (res) => {
                let isRoomCreated = false
                let sendRoomId = ''
                // console.log(res)

                await res.forEach(element => {
                    // console.log(element.data.users[0].uid)

                    if (element.data.users[0].uid == userAuth.uid && element.data.users[1].uid == userId) {
                        isRoomCreated = true
                        sendRoomId = element.id
                    }
                });

                if (isRoomCreated == false) {
                    createRoom('rooms', { users })
                        .then((res2) => {
                            // console.log(res)
                            navigation.navigate(
                                NavigationPathEnum.chat,
                                { postOwnerId: userId, roomId: res2.id, postOwnerName: name }
                            )
                        })
                        .catch((e) => {
                            console.log(e)
                        })
                }
                else {
                    navigation.navigate(
                        NavigationPathEnum.chat,
                        { postOwnerId: userId, roomId: sendRoomId, postOwnerName: name }
                    )
                }
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const showHomeLocation = () => {
        navigation.navigate(
            NavigationPathEnum.showLocation,
            { location: location }
        )
    }

    const deletePost = () => {
        deleteDocFirestore('posts', postId)
            .then(() => {
                deletePostByUser('users', userAuth.uid, 'posts', postId)
                    .then((res) => console.log(res))
                    .catch((e) => console.log(e))
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const returnButton = () => {
        if (isHomePage) {
            if (userAuth.uid == userId) {
                return (
                    <TouchableOpacity
                        onPress={deletePost}
                        style={[postStyles.sendMessageView, { backgroundColor: themeColors.danger }]}>
                        <Text style={{ color: 'white' }}>Gönderiyi Sil</Text>
                    </TouchableOpacity>
                )

            }
            else {
                return (
                    <TouchableOpacity
                        onPress={openChatScreen}
                        style={[postStyles.sendMessageView, { backgroundColor: 'purple' }]}>
                        <Text style={{ color: 'white' }}>Mesaj Gönder</Text>
                    </TouchableOpacity>
                )
            }
        }
        else {
            return (
                <TouchableOpacity
                    onPress={deletePost}
                    style={[postStyles.sendMessageView, { backgroundColor: themeColors.danger }]}>
                    <Text style={{ color: 'white' }}>Gönderiyi Sil</Text>
                </TouchableOpacity>
            )
        }
    }

    return (
        <View style={postStyles.main}>

            <View style={postStyles.imgView}>
                {photos[1] == undefined ? (
                    <Image style={postStyles.img} source={{ uri: photos[0] }} />
                ) : (
                    <FlatList
                        horizontal
                        data={photos}
                        renderItem={({ item, index }) => {
                            return (
                                <Image style={postStyles.img} source={{ uri: item }} />
                            )
                        }}
                    />
                )}

            </View>
            <View style={postStyles.name}>
                <Text style={{ color: 'white', fontSize: wp('5%') }} >{name}</Text>
            </View>

            <View style={postStyles.titleView}>
                <Text style={postStyles.titleText}>{title}</Text>
                <Text style={postStyles.descText}>{desc}</Text>
            </View>

            <View style={postStyles.adressView}>
                <View style={postStyles.adress}>
                    <Text style={{ color: 'white' }} >{adress}</Text>
                </View>
                <TouchableOpacity
                    onPress={showHomeLocation}
                    style={postStyles.location}>
                    <Text style={{ color: 'white' }}>Konum</Text>
                </TouchableOpacity>
            </View>
            <View style={postStyles.featuresView}>
                <View style={postStyles.features}>
                    <View style={postStyles.featureView}>
                        <Text style={{ color: 'white' }}>{isFurnished}</Text>
                        <Text style={{ color: 'white', paddingHorizontal: wp('3%') }}>{room}</Text>
                    </View>
                    <View>
                        <Text style={{ color: 'white' }}>{price} ₺</Text>
                    </View>
                </View>
                {
                    returnButton()
                }

            </View>
        </View>
    )
}

export default Post