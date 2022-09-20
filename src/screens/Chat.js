import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { chatStyles } from '../styles/chatStyles'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useLayoutEffect } from 'react'
import Message from '../components/Message'
import { textInputStyles } from '../components/styles/textInputStyles'
import Ionicons from '@expo/vector-icons/Ionicons';
const Chat = ({ route, navigation }) => {
    const { data } = route.params
    var listRef;

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
                    style={chatStyles.textInput}
                />
                <TouchableOpacity>
                    <Ionicons name="paper-plane" size={32} color="purple" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Chat