import { View, Text, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { postStyles } from './styles/postStyles'
import { NavigationPathEnum } from '../../core/enum/navigationPathEnum'
import { useSelector } from 'react-redux'
import { createRoom, getRoomIsCreated, setChatUsers } from '../../core/firebase/firebaseFirestore'

const Post = ({ navigation, userId, title, desc, name, photos, adress, price }) => {
    const userAuth = useSelector(state => state.auth.userAuth)

    const openChatScreen = () => {
        let users = {
            users: [
                userAuth.uid,
                userId
            ]
        }

        getRoomIsCreated('users', userAuth.uid, 'chatUsers')
            .then(async (res) => {
                let isRoomCreated = false
                let sendRoomId = ''
                // console.log(res)

                await res.forEach(element => {
                    console.log(userAuth.uid)

                    if (element.data.users[0] == userAuth.uid && element.data.users[1] == userId) {
                        isRoomCreated = true
                        console.log('true')
                        sendRoomId = element.id
                    }
                });

                if (isRoomCreated == false) {
                    createRoom('rooms', { users })
                        .then((res2) => {
                            // console.log(res)
                            navigation.navigate(
                                NavigationPathEnum.chat,
                                { postOwnerId: userId, roomId: res2.id }
                            )
                        })
                        .catch((e) => {

                        })
                }
                else {
                    console.log('sifdalşf')
                    navigation.navigate(
                        NavigationPathEnum.chat,
                        { postOwnerId: userId, roomId: sendRoomId }
                    )
                }
            })
            .catch(() => {

            })


    }

    return (
        <View style={postStyles.main}>
            <View style={postStyles.imgView}>
                <FlatList
                    horizontal
                    data={photos}
                    renderItem={({ item, index }) => {
                        return (
                            <Image style={postStyles.img} source={{ uri: item }} />
                        )
                    }}
                />
            </View>
            <View style={postStyles.name}>
                <Text>{name}</Text>
            </View>
            <View style={postStyles.titleView}>
                <Text style={postStyles.titleText}>{title}</Text>
                <Text style={postStyles.descText}>{desc}</Text>
            </View>

            <View style={postStyles.adressView}>
                <View style={postStyles.adress}>
                    <Text >{adress}</Text>
                </View>
                <TouchableOpacity style={postStyles.location}>
                    <Text>Location</Text>
                </TouchableOpacity>
            </View>
            <View style={postStyles.featuresView}>
                <View style={postStyles.features}>
                    <View style={postStyles.featureView}>
                        <Text>Eşyalı</Text>
                        <Text>Eşyalı</Text>
                        <Text>Eşyalı</Text>
                    </View>
                    <View>
                        <Text>{price}</Text>
                    </View>
                </View>
                {/* {
                    userAuth.uid == userId ? (<View></View>) : ( */}
                <TouchableOpacity
                    onPress={openChatScreen}
                    style={postStyles.sendMessageView}>
                    <Text>Send Message</Text>
                </TouchableOpacity>
                {/* //     )
                // } */}

            </View>
        </View>
    )
}

export default Post