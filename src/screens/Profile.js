import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { profileStyles } from '../styles/profileStyles'
import Post from '../components/Post'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getMyPostsFirestore } from '../../core/firebase/firebaseFirestore'
import { useState } from 'react'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { themeColors } from '../../core/enum/themeColorsEnum'
const Profile = ({ navigation }) => {
    const userInfo = useSelector(state => state.userInfo.userInfo)
    const userAuth = useSelector(state => state.auth.userAuth)
    const [myPosts, setMyPosts] = useState([])

    useEffect(() => {
        getMyPostsFirestore('users', userAuth.uid, 'posts')
            .then((res) => {
                setMyPosts(res)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    return (
        <View style={profileStyles.main}>
            <View style={profileStyles.profileCardHeader}>
                <Image
                    style={profileStyles.pp}
                    source={{ uri: 'https://static.wikia.nocookie.net/hunterxhunter/images/b/bd/HxH2011_EP147_Killua_Portrait.png/revision/latest?cb=20220624211000' }}
                />
                <View style={profileStyles.profileCardHeaderContent}>
                    <Text style={{ color: 'white', paddingBottom: wp('2%') }}>{userInfo.name} {userInfo.surname}</Text>
                    <Text style={{ color: 'white', paddingBottom: wp('6%') }}>{userInfo.email}</Text>
                    <TouchableOpacity style={profileStyles.logout}>
                        <Text style={{ color: 'white' }}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={profileStyles.myPostsHeader}>
                <Text style={{ color: 'white' }}>My Posts</Text>
            </View>
            {
                myPosts[0] ? (
                    <FlatList
                        style={profileStyles.myPosts}
                        data={myPosts}
                        renderItem={({ item, index }) => {
                            return (
                                <Post
                                    title={item.title}
                                    key={item.title}
                                    desc={item.desc}
                                    name={item.name}
                                    photos={item.images}
                                    adress={item.adress}
                                    price={item.price}
                                    navigation={navigation}
                                    userId={item.userId}
                                    location={item.location}
                                    isFurnished={item.isFurnished}
                                    room={item.room}
                                />
                            )
                        }}
                    />
                ) : (
                    <ActivityIndicator size="large" color={themeColors.secondary} />
                )
            }



        </View>
    )
}

export default Profile