import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal'

const SuccessModal = ({ onPress, title, text, isVisible }) => {
    return (
        <Modal
            isVisible={isVisible}
            style={{ width: 200, height: 200 }}
        >
            <View style={{ width: 200, height: 200 }}>
                <TouchableOpacity
                    onPress={() => {
                        onPress()
                    }}
                >
                    <Text>Successsss</Text>

                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default SuccessModal