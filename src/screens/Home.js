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
                        renderItem={({ item, index }) => {
                            return (
                                <Post
                                    title={item.data.title}
                                    key={item.data.title}
                                    desc={item.data.desc}
                                    name={item.data.name}
                                    photos={item.data.images}
                                    adress={item.data.adress}
                                    price={item.data.price}
                                    navigation={navigation}
                                    userId={item.data.userId}
                                    location={item.data.location}
                                    isFurnished={item.data.isFurnished}
                                    room={item.data.room}
                                    postId={item.id}
                                    isHomePage={true}
                                />
                            )
                        }

                        }
                    />
                ) : (
                    <ActivityIndicator size="large" color={themeColors.secondary} />
                )
            }

        </View>
    )
}

export default Home