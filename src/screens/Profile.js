import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { profileStyles } from '../styles/profileStyles'
import Post from '../components/Post'
import { useSelector } from 'react-redux'
const Profile = () => {
    const userInfo = useSelector(state => state.userInfo.userInfo)
    const listData = [
        {
            'name': "asdasdqf"
        },
        {
            'name': "asdasdqf"
        },
        {
            'name': "asdasdqf"
        },
        {
            'name': "asdasdqf"
        }
    ]


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
                data={listData}
                renderItem={({ item, index }) => {
                    return (
                        <Post />
                    )
                }}
            />
        </View>
    )
}

export default Profile