import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { approveButtonStyles } from './styles/approveButtonStyles'
import { themeColors } from '../../core/enum/themeColorsEnum'

const ApproveButton = ({ onPress, text, isDisable, isDanger }) => {
    return (
        <TouchableOpacity
            style={[
                approveButtonStyles.approveButton,
                isDisable == true ? { opacity: 0.5 } : { opacity: 1 },
                isDanger ? { backgroundColor: themeColors.danger } : {}
            ]}
            disabled={isDisable ? isDisable : false}
            onPress={() => {
                onPress()
            }}
        >
            <Text style={{ color: 'white' }}>{text}</Text>
        </TouchableOpacity>
    )
}

export default ApproveButton