import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { approveButtonStyles } from './styles/approveButtonStyles'
import { themeColors } from '../../core/enum/themeColorsEnum'
import { LinearGradient } from 'expo-linear-gradient'

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
            {
                isDanger ? (
                    <Text style={{ color: 'white' }}>{text}</Text>
                )
                    : (
                        <LinearGradient
                            colors={[themeColors.secondary, 'purple']}
                            start={{ x: 0.7, y: 0 }}
                            style={approveButtonStyles.approveButton}>
                            <Text style={{ color: 'white' }}>{text}</Text>
                        </LinearGradient>
                    )
            }

        </TouchableOpacity>
    )
}

export default ApproveButton