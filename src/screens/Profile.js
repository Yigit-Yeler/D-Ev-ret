import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { profileStyles } from '../styles/profileStyles'
import Post from '../components/Post'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getMyPostsFirestore } from '../../core/firebase/firebaseFirestore'
import { useState } from 'react'
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
            <View style={profileStyles.userInfo}>
                <Text>{userInfo.name}</Text>
                <Text>{userInfo.surname}</Text>
                <Text>{userInfo.email}</Text>
            </View>
            <View style={profileStyles.myPostsHeader}>
                <Text>MyPosts</Text>
            </View>
            <FlatList
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
                        />
                    )
                }}
            />
        </View>
    )
}

export default Profile