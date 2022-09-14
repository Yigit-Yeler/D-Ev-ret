import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { homeStyles } from '../styles/homeStyles'
import Post from '../components/Post'
import { getDataFirestore } from '../../core/firebase/firebaseFirestore'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../store/slices/userInfoSlice'
import { setPosts } from '../store/slices/postsSlice'
import { useState } from 'react'

const Home = () => {
    const dispatch = useDispatch()
    const userAuth = useSelector(state => state.auth.userAuth)
    // const posts = useSelector(state => state.posts.posts)
    const [posts, setPosts] = useState([])
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
                console.log(res)
                // dispatch(setPosts(res))
                setPosts(res)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    return (
        <View style={homeStyles.main}>
            <Text>Home</Text>
            {
                posts[0] ? (
                    <FlatList
                        data={posts}
                        renderItem={({ item, index }) => (
                            <Post title={item.title} key={item.title} desc={item.desc} name={item.username} link={item.link} />
                        )}
                    />
                ) : (<View><Text>Loading...</Text></View>)
            }

        </View>
    )
}

export default Home