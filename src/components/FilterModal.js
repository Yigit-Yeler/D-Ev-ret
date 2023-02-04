import { View, Text } from 'react-native'
import Modal from 'react-native-modal'
import React from 'react'
import { filterModalStyles } from './styles/filterModalStyles'
import MyDropDownButton from './MyDropDownButton'
import ApproveButton from './ApproveButton'
const FilterModal = ({ isVisible, sortHighToLow, sortLowToHigh, closeModal }) => {
    return (
        <Modal
            isVisible={isVisible}
            style={{ alignItems: 'center', justifyContent: 'flex-end' }}
            backdropOpacity={0}
        >
            <View style={filterModalStyles.main}>
                <ApproveButton text={'High Price To Low'} onPress={sortHighToLow} />
                <ApproveButton text={'Low Price To High'} onPress={sortLowToHigh} />
                <ApproveButton text={'Close'} onPress={closeModal} isDanger={true} />
            </View>
        </Modal>
    )
}

export default FilterModal