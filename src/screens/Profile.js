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
import { LinearGradient } from 'expo-linear-gradient'
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
                        <Text>Henüz bir gönderi paylaşmadınız.</Text>
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
            <LinearGradient
                style={profileStyles.profileCardHeader}
                colors={[themeColors.secondary, 'purple']}
                start={{ x: 0.9, y: 0 }}
            >
                <Image
                    style={profileStyles.pp}
                    source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXFxcX////CwsLGxsb7+/vT09PJycn19fXq6urb29ve3t7w8PDOzs7n5+f5+fnt7e30nlkBAAAFHUlEQVR4nO2dC5qqMAyFMTwUBdz/bq+VYYrKKJCkOfXmXwHna5uTpA+KwnEcx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3Ecx3EcA2iO9cdIc5PUdO257y+BU39u66b4HplE3fk6VIcnqmNfl1+gksr6+iIucjl3WYukor7+re6Hoe1y1UhNO3zUd+fUFRmKpOa0Tt6dY5ubRCrOG/QFLk1WGmnt/JxzykcjdZ/jyxJDLlOV2l36AtcsJJb9boG3YcR3DuqODIE3ztYKPkDdmwRmpUToUaSaq++AvRgZMWbOpbQW8hdCAm8ZDugoikzREdCJ2okJPBx6azFLNOwoOgcxojJ98JkaTSJxMpklKrCAKhZGI0drTY/wU5lXoJYibannV9NYy4oozNEAkPHTjop+DTDxVGkIgYJNoyQQJtiIW+EMjGAjm649AjGIaqswcEFQKJ2QPlJbqytki6ZXAAZRJ52J2McaUowzAfs+uFzrYhnzaapphiPWdaJWShqxjqa6kTTQ205TVbsfMa6htL0iYOsXpJrQjHSmCkv1QGPtiHqlYcQ21Gj7fcDU8xOEUuNgSltPzexh+HqFlanCBHZ4OLhCV+gK/3OF6vWvucLv98MUOY2pwu/PS/+D2qJU7pYGbOvDFDW+bbON9p3o3oRxn0bfLgZTgSn6pSfrtr56qLHemtHPTK2319SzGvtjQ9qeb39WgS66Cm073nd0U1PzDdJCO3Gzn6TKpl9Zq7ujGWsQhlA3NwWIMwG9zM08Y/tBrR9VWeczv5CSQuuUNKIUTk23ZJ5RKfVhjnkXotfWIlgX2BSCDYbZR+QTcLhb3dKZDUY2M0d4KWItwhHRah/zsrOgKw4wycwjcgEVcgQDQo23CqSiWEJkFAfod2oE1uIFdA1OsCPqFXYNTjCfb8Ez+iX2x5sKLlVbhtqdDcar9ZevhnbZxoBUD35k23t0d304LYs1ELVbnfFaZ/REJJX9niP8Q19moZGo3m8XR/yBvOnjFfsXcI2c8ZuNo7WMP5HQh6yRGrlmFOJTnyTcT+zRlqPUBI2gTVWNUzUna1ERgecgF4GpNBQ38jGqxVLzQA1A31Rrhk6Yz9QEh/WND0GnuG9huhiTXJkxfAizTHLr6cbJKN6UCU6x/2DTRE1xEeEXi3O0ZUqBN4nJRzHhFB1JPlFTBZlI2kQ8zc3KJ1Le8DIRmFJiknuVS6RK4Ej/JtBfJErDSzOBiY4wJHX6Z1I4v1GUmdCPNirnLLeg3oJLcbX5PcpHNbRvOa1A956QmRPOUXVF+zkaUJynpkYR0bOMJH2nNej1pqyV/aKkz9jr5yj5vrXXz1F5SQLACiMapmierj2ikLyleKdlA/I/2oFxiglxx9B+mHwz0lf34IZQfhDRhlD6bhvgEAoPYooHkTczSIZTLC+cEExsoNKZiGBiY9cCfo/Y/SjIOBMQizWWTe73CMUasJx7jlD+DdKdWUKoY4PRYFtGpO0G1Lx4RaadgTtJhf4fiGqGIwKWCGuGIwKWqP+7IxYCzygjR9IAO5pC7Da9g70TBVpWRNgFBlgT8RV2WxHbKwJMv4BOaEaYaU2K16yZMN/qgV+G7IWIvwyZCxHeDQMsR8wg0DBDDXB5H2EV+hkEGmaoySHQsEJNFoGGFWrAq98JRhUMX1iMMMqLLEIpK5jCbd4vw9nSt/72lewXiN6jmdjfq8Hdknlk92ZwJnbIMMRM7JBhiFlUFoHd1UWaP1QKsPsHA5mkNB+Smn9JqV3wskatnQAAAABJRU5ErkJggg==' }}
                />
                <View style={profileStyles.profileCardHeaderContent}>
                    <Text style={{ color: 'white', paddingBottom: wp('2%') }}>{userInfo.name} {userInfo.surname}</Text>
                    <Text style={{ color: 'white', paddingBottom: wp('6%') }}>{userInfo.email}</Text>
                    <TouchableOpacity
                        onPress={() => firebaseSignOut(navigation)}
                        style={profileStyles.logout}>
                        <Text style={{ color: 'white' }}>Çıkış Yap</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
            <View style={profileStyles.myPostsHeader}>
                <Text style={{ color: 'white' }}>Postlarım</Text>
            </View>
            {
                renderPost()
            }



        </View>
    )
}

export default Profile