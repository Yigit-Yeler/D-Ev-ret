import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { homeStyles } from '../styles/homeStyles'
import Post from '../components/Post'
import { getDataFirestore } from '../../core/firebase/firebaseFirestore'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../store/slices/userInfoSlice'

const Home = () => {
    const dispatch = useDispatch()
    const userAuth = useSelector(state => state.auth.userAuth)
    useEffect(() => {
        getDataFirestore('users', userAuth.uid)
            .then((res) => {
                dispatch(setUser(res))
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    return (
        <View style={homeStyles.main}>
            <Text>Home</Text>
            <Post />
        </View>
    )
}

export default Home