import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { chatStyles } from '../styles/chatStyles'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useLayoutEffect } from 'react'
import Message from '../components/Message'
import { textInputStyles } from '../components/styles/textInputStyles'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react'
import { useSelector } from 'react-redux'
const Chat = ({ route, navigation }) => {
    const { postOwnerId } = route.params
    const userAuth = useSelector(state => state.auth.userAuth)
    const [message, setMessage] = useState({
        'message': '',
        'uid': userAuth.uid
    })
    const array = [
        {
            'name': 'asdasdqwf İLKKKLŞASFLŞKWLŞFKLASKŞFLKQWOFKŞALSKFŞLKWŞAF',
            'id': 0
        },
        {
            'name': 'asdasdqwf',
            'id': 0
        },
        {
            'name': 'asdasdqwf',
            'id': 0
        },
        {
            'name': 'asdasdqwf',
            'id': 0
        },
        {
            'name': 'asdasdqwf',
            'id': 0
        },
        {
            'name': 'asdasdqwf',
            'id': 0
        },
        {
            'name': 'asdasdqwf',
            'id': 0
        },
        {
            'name': 'sa',
            'id': 0
        },
        {
            'name': 'asdasdqwf',
            'id': 0
        },
        {
            'name': 'asdasdqwf',
            'id': 0
        },
        {
            'name': 'asdasdqwf',
            'id': 0
        },
        {
            'name': 'asdasdqwf',
            'id': 0
        },
        {
            'name': 'asdasdqwf',
            'id': 0
        },
        {
            'name': 'asdasdqwf SONN',
            'id': 0
        },
    ]

    useLayoutEffect(() => {

    }, [])

    const textHandle = (value) => {
        let updatedValue = { 'message': value };
        setMessage(message => ({
            ...message,
            ...updatedValue
        }));
    }

    const sendMessage = () => {
        console.log(postOwnerId)
        console.log(message)
    }

    return (
        <View style={chatStyles.main}>
            <View style={chatStyles.flatView}>
                <FlatList
                    data={array}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <Message text={item.name} />
                        )
                    }}
                />
            </View>
            <View style={chatStyles.messageInput}>
                <TextInput
                    onChangeText={(text) => textHandle(text)}
                    style={chatStyles.textInput}
                />
                <TouchableOpacity
                    onPress={sendMessage}
                >
                    <Ionicons name="paper-plane" size={32} color="purple" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Chat