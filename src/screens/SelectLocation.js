import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import ApproveButton from '../components/ApproveButton';
import { NavigationPathEnum } from '../../core/enum/navigationPathEnum';
import { useDispatch, useSelector } from 'react-redux';
import { setLocation } from '../store/slices/locationSlice';
import { selectLocationStyles } from '../styles/selectLocationStyles';
const SelectLocation = ({ navigation }) => {

    const dispatch = useDispatch()
    const location = useSelector(state => state.location.location)
    const [xy, setXy] = useState()

    const mapEvent = (e) => {
        dispatch(setLocation(e.nativeEvent.coordinate))
        setXy(e.nativeEvent.position)
    }

    const done = () => {
        navigation.navigate(
            NavigationPathEnum.bottomTab,
            { screen: NavigationPathEnum.createPost },
        )
    }

    return (
        <View style={selectLocationStyles.container}>
            <MapView
                onPress={(e) => {
                    mapEvent(e)
                }}
                style={selectLocationStyles.map}

                region={
                    xy ? {
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: xy.x * 0.000001,
                        longitudeDelta: xy.y * 0.000001
                    } : {
                        latitude: 39.06837271699083,
                        longitude: 35.40302999317646,
                        latitudeDelta: 10,
                        longitudeDelta: 10
                    }}
            >
                {
                    location.latitude ? (
                        <Marker
                            coordinate={location}
                        />
                    )
                        : (
                            <View></View>
                        )
                }

            </MapView>
            <View
                style={selectLocationStyles.buttonView}
            >
                {
                    location.latitude ? (
                        <ApproveButton text={'Seç'} onPress={done} />

                    )
                        :
                        (
                            <ApproveButton text={'Seç'} onPress={done} isDisable={true} />

                        )
                }
            </View>

        </View>
    )
}

export default SelectLocation