import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { approveButtonStyles } from './styles/approveButtonStyles'

const ApproveButton = ({ onPress, text }) => {
    return (
        <TouchableOpacity
            style={approveButtonStyles.approveButton}
            onPress={() => {
                onPress()
            }}
        >
            <Text>{text}</Text>
        </TouchableOpacity>
    )
}

export default ApproveButton