import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { dmBoxStyles } from './styles/dmBoxStyles'

const DmBox = ({ comeFrom, lastMassage }) => {
    return (
        <TouchableOpacity
            style={dmBoxStyles.dmBox}
        >
            <View style={dmBoxStyles.title}>
                <Text style={dmBoxStyles.titleText}>{comeFrom}</Text>
            </View>
            <View style={dmBoxStyles.lastMassage}>
                <Text style={dmBoxStyles.lastMassageText}>{lastMassage}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default DmBox