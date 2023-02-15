import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { themeColors } from '../../core/enum/themeColorsEnum'
import { headerStyle } from './styles/headerStyles'

const Header = ({ title }) => {
    return (
        <LinearGradient
            colors={[themeColors.secondary, 'purple']}
            start={{ x: 0.7, y: 0 }}
            style={headerStyle.main}>
            <Text style={headerStyle.text}>{title}</Text>
        </LinearGradient>
    )
}

export default Header