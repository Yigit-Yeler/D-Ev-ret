import { View, Text, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { postStyles } from './styles/postStyles'
import { NavigationPathEnum } from '../../core/enum/navigationPathEnum'
import { useSelector } from 'react-redux'
import { createRoom, deleteDocFirestore, deletePostByUser, getRoomIsCreated, setChatUsers } from '../../core/firebase/firebaseFirestore'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { themeColors } from '../../core/enum/themeColorsEnum'
import { LinearGradient } from 'expo-linear-gradient'


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
                        style={postStyles.sendMessageView}>
                        <LinearGradient
                            style={postStyles.sendMessageView}
                            colors={[themeColors.secondary, 'purple']}
                            start={{ x: 0.7, y: 0 }}
                        >
                            <Text style={{ color: 'white' }}>Mesaj Gönder</Text>
                        </LinearGradient>
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
        <View
            style={postStyles.main}
        >
            <View style={postStyles.name}>
                <Image
                    style={postStyles.pp}
                    source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXFxcX////CwsLGxsb7+/vT09PJycn19fXq6urb29ve3t7w8PDOzs7n5+f5+fnt7e30nlkBAAAFHUlEQVR4nO2dC5qqMAyFMTwUBdz/bq+VYYrKKJCkOfXmXwHna5uTpA+KwnEcx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3EcA2iO9cdIc5PUdO257y+BU39u66b4HplE3fk6VIcnqmNfl1+gksr6+iIucjl3WYukor7+re6Hoe1y1UhNO3zUd+fUFRmKpOa0Tt6dY5ubRCrOG/QFLk1WGmnt/JxzykcjdZ/jyxJDLlOV2l36AtcsJJb9boG3YcR3DuqODIE3ztYKPkDdmwRmpUToUaSaq++AvRgZMWbOpbQW8hdCAm8ZDugoikzREdCJ2okJPBx6azFLNOwoOgcxojJ98JkaTSJxMpklKrCAKhZGI0drTY/wU5lXoJYibannV9NYy4oozNEAkPHTjop+DTDxVGkIgYJNoyQQJtiIW+EMjGAjm649AjGIaqswcEFQKJ2QPlJbqytki6ZXAAZRJ52J2McaUowzAfs+uFzrYhnzaapphiPWdaJWShqxjqa6kTTQ205TVbsfMa6htL0iYOsXpJrQjHSmCkv1QGPtiHqlYcQ21Gj7fcDU8xOEUuNgSltPzexh+HqFlanCBHZ4OLhCV+gK/3OF6vWvucLv98MUOY2pwu/PS/+D2qJU7pYGbOvDFDW+bbON9p3o3oRxn0bfLgZTgSn6pSfrtr56qLHemtHPTK2319SzGvtjQ9qeb39WgS66Cm073nd0U1PzDdJCO3Gzn6TKpl9Zq7ujGWsQhlA3NwWIMwG9zM08Y/tBrR9VWeczv5CSQuuUNKIUTk23ZJ5RKfVhjnkXotfWIlgX2BSCDYbZR+QTcLhb3dKZDUY2M0d4KWItwhHRah/zsrOgKw4wycwjcgEVcgQDQo23CqSiWEJkFAfod2oE1uIFdA1OsCPqFXYNTjCfb8Ez+iX2x5sKLlVbhtqdDcar9ZevhnbZxoBUD35k23t0d304LYs1ELVbnfFaZ/REJJX9niP8Q19moZGo3m8XR/yBvOnjFfsXcI2c8ZuNo7WMP5HQh6yRGrlmFOJTnyTcT+zRlqPUBI2gTVWNUzUna1ERgecgF4GpNBQ38jGqxVLzQA1A31Rrhk6Yz9QEh/WND0GnuG9huhiTXJkxfAizTHLr6cbJKN6UCU6x/2DTRE1xEeEXi3O0ZUqBN4nJRzHhFB1JPlFTBZlI2kQ8zc3KJ1Le8DIRmFJiknuVS6RK4Ej/JtBfJErDSzOBiY4wJHX6Z1I4v1GUmdCPNirnLLeg3oJLcbX5PcpHNbRvOa1A956QmRPOUXVF+zkaUJynpkYR0bOMJH2nNej1pqyV/aKkz9jr5yj5vrXXz1F5SQLACiMapmierj2ikLyleKdlA/I/2oFxiglxx9B+mHwz0lf34IZQfhDRhlD6bhvgEAoPYooHkTczSIZTLC+cEExsoNKZiGBiY9cCfo/Y/SjIOBMQizWWTe73CMUasJx7jlD+DdKdWUKoY4PRYFtGpO0G1Lx4RaadgTtJhf4fiGqGIwKWCGuGIwKWqP+7IxYCzygjR9IAO5pC7Da9g70TBVpWRNgFBlgT8RV2WxHbKwJMv4BOaEaYaU2K16yZMN/qgV+G7IWIvwyZCxHeDQMsR8wg0DBDDXB5H2EV+hkEGmaoySHQsEJNFoGGFWrAq98JRhUMX1iMMMqLLEIpK5jCbd4vw9nSt/72lewXiN6jmdjfq8Hdknlk92ZwJnbIMMRM7JBhiFlUFoHd1UWaP1QKsPsHA5mkNB+Smn9JqV3wskatnQAAAABJRU5ErkJggg==' }}
                />
                <Text style={{ fontSize: wp('5%') }} >{name}</Text>
            </View>
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


            <View style={postStyles.titleView}>
                <Text style={postStyles.titleText}>{title}</Text>
                <Text style={postStyles.descText}>{desc}</Text>
            </View>

            <View style={postStyles.adressView}>
                <View style={postStyles.adress}>
                    <Text  >{adress}</Text>
                </View>
                <TouchableOpacity
                    onPress={showHomeLocation}
                    style={postStyles.location}>
                    <LinearGradient
                        style={postStyles.location}
                        colors={[themeColors.secondary, 'purple']}
                        start={{ x: 0.7, y: 0 }}
                    >
                        <Text style={{ fontSize: wp('4%'), color: 'white' }}>Konum</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={postStyles.featuresView}>
                <View style={postStyles.features}>
                    <View style={postStyles.featureView}>
                        <Text style={{ fontSize: wp('6%') }}>{isFurnished}</Text>
                        <Text style={{ paddingHorizontal: wp('3%'), fontSize: wp('6%') }}>{room}</Text>
                    </View>
                    <View>
                        <Text style={{ fontWeight: '500', fontSize: wp('6%') }}>{price} ₺</Text>
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