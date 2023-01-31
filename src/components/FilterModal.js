import { View, Text } from 'react-native'
import Modal from 'react-native-modal'
import React from 'react'
import { filterModalStyles } from './styles/filterModalStyles'
const FilterModal = ({ title }) => {
    return (
        <Modal
            isVisible={true}
            style={{ alignItems: 'center', justifyContent: 'flex-end' }}
            backdropOpacity={0}
        >
            <View style={filterModalStyles.main}>

            </View>
        </Modal>
    )
}

export default FilterModal