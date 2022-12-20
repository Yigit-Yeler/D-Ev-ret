import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { homeStyles } from '../styles/homeStyles'
import Post from '../components/Post'
import { getDataFirestore } from '../../core/firebase/firebaseFirestore'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../store/slices/userInfoSlice'
import { setPosts } from '../store/slices/postsSlice'
import { useState } from 'react'
import { themeColors } from '../../core/enum/themeColorsEnum'

const Home = ({ navigation }) => {
    const dispatch = useDispatch()
    const userAuth = useSelector(state => state.auth.userAuth)
    // const posts = useSelector(state => state.posts.posts)
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getDataFirestore('posts')
                .then((res) => {
                    // dispatch(setPosts(res))
                    setPosts(res)
                })
                .catch((e) => {
                    console.log(e)
                })
        });
        getDataFirestore('users', userAuth.uid)
            .then((res) => {
                dispatch(setUser(res))
            })
            .catch((e) => {
                console.log(e)
            })


        return unsubscribe;

    }, [])

    return (
        <View style={homeStyles.main}>

            {
                posts[0] ? (
                    <FlatList
                        data={posts}
                        renderItem={({ item, index }) => (
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
                        )}
                    />
                ) : (
                    <ActivityIndicator size="large" color={themeColors.secondary} />
                )
            }

        </View>
    )
}

export default Home