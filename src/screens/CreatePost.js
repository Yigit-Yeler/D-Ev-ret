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
import * as ImagePicker from 'expo-image-picker';
import { uploadImg } from '../../core/firebase/firebaseStorage'
import { modalHandle } from '../../core/myModal/ModalHandle'
const CreatePost = ({ navigation }) => {
    const dispatch = useDispatch()
    const location = useSelector(state => state.location.location)
    const userInfo = useSelector(state => state.userInfo.userInfo)
    const userAuth = useSelector(state => state.auth.userAuth)
    const [selectedImages, setSelectedImages] = useState()
    const [isSuccess, setIsSuccess] = useState(0)
    const [resText, setResText] = useState('')
    const [visible, setVisible] = useState(true)
    const [text, setText] = useState({
        'title': '',
        'desc': '',
        'adress': '',
        'price': '',
        'isFurnished': '',
        'room': '',
        'userId': userAuth.uid
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
    }

    const handleDropDownR = (value) => {
        let updatedValue = { 'room': value };
        setText(text => ({
            ...text,
            ...updatedValue
        }));
    }

    const modalEvents = () => {
        setIsSuccess(0)
        setVisible(false)
        if (isSuccess == 1) {
            navigation.replace(
                NavigationPathEnum.bottomTab,
                { screen: NavigationPathEnum.home }
            )
        }
    }

    const submitPost = () => {
        let tmpData = { ...text, location }
        tmpData = { ...tmpData, 'name': userInfo.name }
        uploadImg(selectedImages)
            .then((res) => {
                tmpData = { ...tmpData, 'images': res }
                insertDataFirestore('posts', tmpData)
                    .then((res) => {
                        setIsSuccess(1)
                        setVisible(true)
                        setResText(res)
                        dispatch(clearLocation())
                    })
                    .catch((e) => {
                        setResText(e.toString())
                    })
            })
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            quality: 0.1
        });

        if (!result.cancelled) {
            setSelectedImages(result)
        }
    };

    return (

        <View style={createPostStyles.main}>
            {
                modalHandle(resText, visible, isSuccess, modalEvents)
            }
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
                <SelectPhotoButton photos={selectedImages} onPress={() => pickImage} />
            </View>

            <ApproveButton onPress={submitPost} text={'Share'} />

        </View>
    )
}

export default CreatePost