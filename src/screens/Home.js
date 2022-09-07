import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { homeStyles } from '../styles/homeStyles'
import Post from '../components/Post'
import { getDataFirestore } from '../../core/firebase/firebaseFirestore'
import { useSelector } from 'react-redux'

const Home = () => {
    const user = useSelector(state => state.auth.user)
    useEffect(() => {
        getDataFirestore('users', user.uid)
    }, [])

    return (
        <View style={homeStyles.main}>
            <Text>Home</Text>
            <Post />
        </View>
    )
}

export default Home