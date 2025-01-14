import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { dmBoxStyles } from './styles/dmBoxStyles'
import { NavigationPathEnum } from '../../core/enum/navigationPathEnum'
import { useSelector } from 'react-redux'
import { LinearGradient } from 'expo-linear-gradient'
import { themeColors } from '../../core/enum/themeColorsEnum'

const DmBox = ({ navigation, roomId, comeFrom, lastMassage, time }) => {
    const userAuth = useSelector(state => state.auth.userAuth)

    return (


        <TouchableOpacity
            onPress={() => {
                console.log(roomId, comeFrom.uid, comeFrom.name)
                navigation.navigate(
                    NavigationPathEnum.chat,
                    { postOwnerId: comeFrom.uid, roomId: roomId, postOwnerName: comeFrom.name }
                )
            }}
            style={dmBoxStyles.dmBox}
        >
            <LinearGradient
                colors={[themeColors.secondary, 'purple']}
                start={{ x: 0.7, y: 0 }}
                style={dmBoxStyles.dmBox}>
                <View style={dmBoxStyles.title}>
                    <Text style={dmBoxStyles.titleText}>{comeFrom.name}</Text>
                </View>
                <View style={dmBoxStyles.content}>
                    <Text style={dmBoxStyles.lastMassageText}>{lastMassage}</Text>

                    <Text style={{ color: 'white' }}>{time}</Text>

                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default DmBox