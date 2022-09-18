import { View, Text } from 'react-native'
import React from 'react'
import { chatStyles } from '../styles/chatStyles'

const Chat = ({ route }) => {
    const { data } = route.params
    return (
        <View style={chatStyles.main}>
            <Text>{data}</Text>
        </View>
    )
}

export default Chat