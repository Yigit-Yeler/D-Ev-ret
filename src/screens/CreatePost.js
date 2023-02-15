import { View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { createPostStyles } from '../styles/createPostStyles'
import { textInputStyles } from '../components/styles/textInputStyles'

import MyDropDownButton from '../components/MyDropDownButton'
import ApproveButton from '../components/ApproveButton'
import MapView, { Marker } from 'react-native-maps'
import { NavigationPathEnum } from '../../core/enum/navigationPathEnum'
import { useSelector, useDispatch } from 'react-redux'
import SelectPhotoButton from '../components/SelectPhotoButton'
import { insertDataFirestore, insertNestedDataFirestore, insertPostFirestore } from '../../core/firebase/firebaseFirestore'
import { clearLocation } from '../store/slices/locationSlice'
import * as ImagePicker from 'expo-image-picker';
// import { uploadImg } from '../../core/firebase/firebaseStorage'
import { uploadImgToFirebase } from 'firebase-storage-upload-img'
import { modalHandle } from '../../core/myModal/ModalHandle'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { themeColors } from '../../core/enum/themeColorsEnum'
const CreatePost = ({ navigation }) => {
    const dispatch = useDispatch()
    const location = useSelector(state => state.location.location)
    const userInfo = useSelector(state => state.userInfo.userInfo)
    const userAuth = useSelector(state => state.auth.userAuth)
    const [selectedImages, setSelectedImages] = useState()
    const [isSuccess, setIsSuccess] = useState(0)
    const [resText, setResText] = useState('')
    const [visible, setVisible] = useState(true)
    const [ready, setReady] = useState(false)
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
        if (name == 'price') {
            let updatedValue = { [name]: Number(value) };
            setText(text => ({
                ...text,
                ...updatedValue
            }));
        }
        else {
            let updatedValue = { [name]: value };
            setText(text => ({
                ...text,
                ...updatedValue
            }));
        }

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
        if (
            text.title == ''
            || text.adress == ''
            || text.desc == ''
            || text.isFurnished == ''
            || text.price == ''
            || text.room == ''
            || !selectedImages
            || location == {}
        ) {
            setResText("Lütfen Tüm Alanları Doldurunuz!")
            setIsSuccess(2)
            setVisible(true)
        }
        else {
            setReady(true)
            uploadImgToFirebase(selectedImages)
                .then((res) => {
                    tmpData = { ...tmpData, 'images': res }
                    insertPostFirestore('users', userAuth.uid, 'posts', tmpData)
                        .then((res) => {
                            setResText("Gönderi Paylaşıldı!")
                            setIsSuccess(1)
                            setVisible(true)
                            dispatch(clearLocation())
                        })
                        .catch((e) => {
                            setResText("Gönderi Paylaşılamadı :(")
                            setIsSuccess(2)
                        })
                })
        }



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
        <KeyboardAwareScrollView>
            <View style={createPostStyles.main}>
                {
                    modalHandle(resText, visible, isSuccess, modalEvents)
                }
                <TextInput
                    placeholder='Başlık'
                    style={textInputStyles.textInput}
                    onChangeText={(text) => handleTextInputs(text, 'title')}
                    maxLength={50}
                />
                <TextInput
                    placeholder='Açıklama'
                    style={textInputStyles.textInput}
                    onChangeText={(text) => handleTextInputs(text, 'desc')}
                    maxLength={100}
                />
                <TextInput
                    placeholder='Adres'
                    style={textInputStyles.textInput}
                    onChangeText={(text) => handleTextInputs(text, 'adress')}
                    maxLength={150}
                />

                <TextInput
                    keyboardType='phone-pad'
                    placeholder='Fiyat'
                    style={textInputStyles.textInput}
                    onChangeText={(text) => handleTextInputs(text, 'price')}
                    maxLength={10}
                />
                <View style={createPostStyles.dropDownButtonsView}>
                    <MyDropDownButton placeholder={'Eşya'} data={furnished} value={text.isFurnished} handleDropDown={handleDropDownF} />
                    <MyDropDownButton placeholder={'Oda'} data={rooms} value={text.room} handleDropDown={handleDropDownR} />
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
                                    zoomEnabled={false}
                                    scrollEnabled={false}
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
                {
                    ready ? (
                        <ActivityIndicator size="large" color={themeColors.secondary} />
                    ) : (
                        <ApproveButton onPress={submitPost} text={'Paylaş'} />
                    )
                }


            </View>
        </KeyboardAwareScrollView>
    )
}

export default CreatePost