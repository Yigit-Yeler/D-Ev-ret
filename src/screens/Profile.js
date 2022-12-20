import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import { profileStyles } from '../styles/profileStyles'
import Post from '../components/Post'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getMyPostsFirestore } from '../../core/firebase/firebaseFirestore'
import { useState } from 'react'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { themeColors } from '../../core/enum/themeColorsEnum'
import { firebaseSignOut } from '../../core/firebase/firebaseAuth'
const Profile = ({ navigation }) => {
    const userInfo = useSelector(state => state.userInfo.userInfo)
    const userAuth = useSelector(state => state.auth.userAuth)
    const [myPosts, setMyPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isEmpty, setIsEmpty] = useState(false)

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getMyPostsFirestore('users', userAuth.uid, 'posts')
                .then((res) => {
                    setMyPosts(res)
                    setIsLoading(false)
                    if (res == '') {
                        setIsEmpty(true)
                    }
                })
                .catch((e) => {
                    console.log(e)
                })
        });

        return unsubscribe;

    }, [])

    const renderPost = () => {
        if (isLoading == false) {
            if (isEmpty) {
                return (
                    <View>
                        <Text>You don't have any post</Text>
                    </View>
                )
            }
            else {
                return (
                    <FlatList
                        style={profileStyles.myPosts}
                        data={myPosts}
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
                                    isHomePage={false}
                                />
                            )
                        }}
                    />
                )

            }
        }
        else {
            return (
                <ActivityIndicator size="large" color={themeColors.secondary} />

            )
        }
    }

    return (
        <View style={profileStyles.main}>
            <View style={profileStyles.profileCardHeader}>
                <Image
                    style={profileStyles.pp}
                    source={{ uri: 'https://static.wikia.nocookie.net/hunterxhunter/images/b/bd/HxH2011_EP147_Killua_Portrait.png/revision/latest?cb=20220624211000' }}
                />
                <View style={profileStyles.profileCardHeaderContent}>
                    <Text style={{ color: 'white', paddingBottom: wp('2%') }}>{userInfo.name} {userInfo.surname}</Text>
                    <Text style={{ color: 'white', paddingBottom: wp('6%') }}>{userInfo.email}</Text>
                    <TouchableOpacity
                        onPress={() => firebaseSignOut(navigation)}
                        style={profileStyles.logout}>
                        <Text style={{ color: 'white' }}>Log Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={profileStyles.myPostsHeader}>
                <Text style={{ color: 'white' }}>My Posts</Text>
            </View>
            {
                renderPost()
            }



        </View>
    )
}

export default Profile