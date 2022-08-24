import { View, Text } from 'react-native'
import React from 'react'
import { Dropdown } from 'react-native-element-dropdown'
import { dropDownStyles } from './styles/dropDownStyles'
const MyDropDownButton = ({ data, value, handleDropDown }) => {
    return (
        <Dropdown
            style={dropDownStyles.dropDown}
            data={data}
            value={value}
            labelField="label"
            valueField="value"
            placeholder='State'
            onChange={item => {
                handleDropDown(item.value)
            }}
        />
    )
}

export default MyDropDownButton