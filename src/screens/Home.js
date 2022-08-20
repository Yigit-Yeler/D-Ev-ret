import { View, Text } from 'react-native'
import React from 'react'
import { homeStyles } from '../styles/homeStyles'
import Post from '../components/Post'

const Home = () => {
    return (
        <View style={homeStyles.main}>
            <Text>Home</Text>
            <Post />
        </View>
    )
}

export default Home