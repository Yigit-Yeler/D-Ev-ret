import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { dmBoxStyles } from './styles/dmBoxStyles'
import { NavigationPathEnum } from '../../core/enum/navigationPathEnum'
import { useSelector } from 'react-redux'

const DmBox = ({ navigation, roomId, comeFrom, lastMassage }) => {
    const userAuth = useSelector(state => state.auth.userAuth)

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate(
                    NavigationPathEnum.chat,
                    { postOwnerId: comeFrom.uid, roomId: roomId, postOwnerName: comeFrom.name }
                )
            }}
            style={dmBoxStyles.dmBox}
        >
            <View style={dmBoxStyles.title}>
                <Text style={dmBoxStyles.titleText}>{comeFrom.name}</Text>
            </View>
            <View style={dmBoxStyles.lastMassage}>
                <Text style={dmBoxStyles.lastMassageText}>{lastMassage}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default DmBox