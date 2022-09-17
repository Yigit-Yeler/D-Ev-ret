import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'
import { successModalStyles } from './styles/successModalStyles'

const SuccessModal = ({ onPress, title, text, isVisible }) => {
    return (
        <Modal
            isVisible={isVisible}
            style={{ alignItems: 'center', justifyContent: 'center' }}
        >
            <View style={successModalStyles.main}>

                <Text style={successModalStyles.titleText}>SUCCESS</Text>
                <Text>{text}</Text>

                <TouchableOpacity
                    style={successModalStyles.button}
                    onPress={() => {
                        onPress()
                    }}
                >
                    <Text>Close</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default SuccessModal