import { View, Text, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { postStyles } from './styles/postStyles'
import { NavigationPathEnum } from '../../core/enum/navigationPathEnum'
import { useSelector } from 'react-redux'
import { createRoom, setChatUsers } from '../../core/firebase/firebaseFirestore'

const Post = ({ navigation, userId, title, desc, name, photos, adress, price }) => {
    const userAuth = useSelector(state => state.auth.userAuth)

    const openChatScreen = () => {
        let users = {
            users: [
                userId,
                userAuth.uid
            ]
        }
        createRoom('rooms', { users })
            .then((res) => {
                // console.log(res)
                setChatUsers('users', userAuth.uid, 'chatUsers', res.id, users)
                navigation.navigate(
                    NavigationPathEnum.chat,
                    { postOwnerId: userId, roomId: res.id }
                )
            })
            .catch((e) => {

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