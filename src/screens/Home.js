import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { homeStyles } from '../styles/homeStyles'
import Post from '../components/Post'
import { getDataFirestore } from '../../core/firebase/firebaseFirestore'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../store/slices/userInfoSlice'
import { setPosts } from '../store/slices/postsSlice'

const Home = () => {
    const dispatch = useDispatch()
    const userAuth = useSelector(state => state.auth.userAuth)
    const posts = useSelector(state => state.posts.posts)
    useEffect(() => {
        getDataFirestore('users', userAuth.uid)
            .then((res) => {
                dispatch(setUser(res))
            })
            .catch((e) => {
                console.log(e)
            })
        getDataFirestore('posts')
            .then((res) => {
                dispatch(setPosts(res))
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    return (
        <View style={homeStyles.main}>
            <Text>Home</Text>
            {
                posts[0] ? (<Post />) : (<Post />)
            }

        </View>
    )
}

export default Home