import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import { errorModalStyles } from './styles/errorModalStyles'
const ErrorModal = ({ onPress, title, text, isVisible }) => {
    return (

        <Modal
            isVisible={isVisible}
            style={{ alignItems: 'center', justifyContent: 'center' }}
        >
            <View style={errorModalStyles.main}>

                <Text style={errorModalStyles.titleText}>ERROR</Text>
                <Text>{text}</Text>

                <TouchableOpacity
                    style={errorModalStyles.button}
                    onPress={() => {
                        onPress()
                    }}
                >
                    <Text>Kapat</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default ErrorModal