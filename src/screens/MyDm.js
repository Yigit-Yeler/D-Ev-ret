import { View, Text, FlatList } from 'react-native'
import React from 'react'
import DmBox from '../components/DmBox'
import { myDmStyles } from '../styles/myDmStyles'
import { useEffect } from 'react'
import { getLastMessage } from '../../core/firebase/firebaseFirestore'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { NavigationPathEnum } from '../../core/enum/navigationPathEnum'

const MyDm = ({ navigation }) => {
    const userAuth = useSelector(state => state.auth.userAuth)
    const [dmBox, setDmBox] = useState([])

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getLastMessage('users', userAuth.uid, 'chatUsers')
                .then((res) => {
                    setDmBox(res)
                })
        });
        return unsubscribe
    }, [])

    return (
        <View style={myDmStyles.main}>
            <FlatList
                data={dmBox}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <DmBox
                            navigation={navigation}
                            roomId={item.roomId}
                            comeFrom={item.users[1]}
                            lastMassage={item.lastMessage.message}
                            time={item.lastMessage.date.toDate().toLocaleTimeString()}
                        />
                    )
                }}
            />
        </View>
    )
}

export default MyDm