import { View, Text } from 'react-native'
import React from 'react'
import { messageStyles } from './styles/messageStyles'
import { LinearGradient } from 'expo-linear-gradient'
import { themeColors } from '../../core/enum/themeColorsEnum'

const Message = ({ text, userId, messageUserId }) => {
    if (userId == messageUserId) {
        return (

            <View style={[messageStyles.main, { justifyContent: 'flex-end' }]}>
                <LinearGradient style={messageStyles.message}
                    colors={[themeColors.secondary, 'purple']}>
                    <Text style={{ color: 'white' }}>{text}</Text>
                </LinearGradient>
            </View>
        )
    }
    else {
        return (
            <View style={[messageStyles.main, { justifyContent: 'flex-start' }]}>
                <LinearGradient style={messageStyles.message}
                    colors={[themeColors.secondary, 'purple']}>
                    <Text style={{ color: 'white' }}>{text}</Text>
                </LinearGradient>
            </View>
        )
    }

}

export default Message