import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { profileStyles } from '../styles/profileStyles'
import Post from '../components/Post'
const Profile = () => {
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
                <Text>Name</Text>
                <Text>Surname</Text>
                <Text>E-mail</Text>
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