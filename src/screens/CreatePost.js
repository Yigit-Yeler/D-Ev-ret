import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { createPostStyles } from '../styles/createPostStyles'
import { textInputStyles } from '../components/styles/textInputStyles'

import MyDropDownButton from '../components/MyDropDownButton'
import ApproveButton from '../components/ApproveButton'
import MapView, { Marker } from 'react-native-maps'
import { NavigationPathEnum } from '../../core/enum/navigationPathEnum'
import { useSelector, useDispatch } from 'react-redux'
import SelectPhotoButton from '../components/SelectPhotoButton'
import { insertDataFirestore } from '../../core/firebase/firebaseFirestore'
import { clearLocation } from '../store/slices/locationSlice'
const CreatePost = ({ navigation }) => {
    const dispatch = useDispatch()
    const location = useSelector(state => state.location.location)
    const userInfo = useSelector(state => state.userInfo.userInfo)
    const [text, setText] = useState({
        'title': '',
        'desc': '',
        'adress': '',
        'price': '',
        'isFurnished': '',
        'room': '',
        'images': [
            'https://static.wikia.nocookie.net/hunterxhunter/images/b/bd/HxH2011_EP147_Killua_Portrait.png/revision/latest?cb=20220624211000',
            'https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/e7c5dbd4a9ede04b7ceaf66add81d335.jpeg?x-expires=1663340400&x-signature=ACeX4aFt3TWoqYXXHCQ1%2FoUO6kU%3D',
            'https://i.pinimg.com/564x/07/9e/6b/079e6b3220ef9b4994c58b560f64ea25.jpg'
        ]
    })

    const furnished = [
        { label: 'Eşyalı', value: 'Eşyalı' },
        { label: 'Eşyasız', value: 'Eşyasız' },
    ];

    const rooms = [
        { label: '1+0', value: '1+0' },
        { label: '1+1', value: '1+1' },
        { label: '2+1', value: '2+1' },
        { label: '3+1', value: '3+1' },
    ];

    const handleTextInputs = (value, name) => {
        let updatedValue = { [name]: value };
        setText(text => ({
            ...text,
            ...updatedValue
        }));
    }

    const handleDropDownF = (value) => {
        let updatedValue = { 'isFurnished': value };
        setText(text => ({
            ...text,
            ...updatedValue
        }));
        console.log(text)
    }

    const handleDropDownR = (value) => {
        let updatedValue = { 'room': value };
        setText(text => ({
            ...text,
            ...updatedValue
        }));
    }

    const submitPost = () => {
        console.log("submitttt")
        let tmpData = { ...text, location }
        tmpData = { ...tmpData, 'name': userInfo.name }
        insertDataFirestore('posts', tmpData)
        dispatch(clearLocation())
        // TODO: delete location data in redux
    }

    return (

        <View style={createPostStyles.main}>
            <TextInput
                placeholder='Başlık'
                style={textInputStyles.textInput}
                onChangeText={(text) => handleTextInputs(text, 'title')}
            />
            <TextInput
                placeholder='Açıklama'
                style={textInputStyles.textInput}
                onChangeText={(text) => handleTextInputs(text, 'desc')}
            />
            <TextInput
                placeholder='Adres'
                style={textInputStyles.textInput}
                onChangeText={(text) => handleTextInputs(text, 'adress')}
            />

            <TextInput
                placeholder='Fiyat'
                style={textInputStyles.textInput}
                onChangeText={(text) => handleTextInputs(text, 'price')}
            />
            <View style={createPostStyles.dropDownButtonsView}>
                <MyDropDownButton data={furnished} value={text.isFurnished} handleDropDown={handleDropDownF} />
                <MyDropDownButton data={rooms} value={text.room} handleDropDown={handleDropDownR} />
            </View>
            <View
                style={createPostStyles.mapAndPhotoView}
            >
                <TouchableOpacity
                    onPress={() => { navigation.navigate(NavigationPathEnum.selectLocation) }}
                    style={createPostStyles.selectLocation}>
                    {
                        location.latitude ? (
                            <MapView
                                style={createPostStyles.mapView}
                                region={{
                                    latitude: location.latitude,
                                    longitude: location.longitude,
                                    latitudeDelta: 0.0001,
                                    longitudeDelta: 0.0001,
                                }}
                            >
                                <Marker
                                    coordinate={location}
                                />
                            </MapView>
                        ) :
                            (
                                <MapView
                                    style={createPostStyles.mapView}
                                    region={{
                                        latitude: 17.6868,
                                        longitude: 83.2185,
                                        latitudeDelta: 10,
                                        longitudeDelta: 10
                                    }}
                                />
                            )
                    }

                </TouchableOpacity>
                <SelectPhotoButton />
            </View>

            <ApproveButton onPress={submitPost} text={'Share'} />

        </View>
    )
}

export default CreatePost