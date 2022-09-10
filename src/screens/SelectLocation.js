import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import ApproveButton from '../components/ApproveButton';
import { NavigationPathEnum } from '../../core/enum/navigationPathEnum';

const SelectLocation = ({ navigation }) => {
    const [location, setLocation] = useState()
    const [xy, setXy] = useState()
    const mapEvent = (e) => {
        console.log(e.nativeEvent.coordinate)
        setLocation(e.nativeEvent.coordinate)

        setXy(e.nativeEvent.position)
    }

    const done = () => {
        navigation.navigate(
            NavigationPathEnum.bottomTab,
            { screen: NavigationPathEnum.createPost, params: { coordinates: location } },
        )
    }

    return (
        <View style={styles.container}>
            <MapView
                onPress={(e) => {
                    mapEvent(e)
                }}
                style={styles.map}

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
                    location ? (
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
                style={styles.buttonView}
            >
                {
                    location ? (
                        <ApproveButton text={'Done'} onPress={done} />

                    )
                        :
                        (
                            <ApproveButton text={'Done'} onPress={done} isDisable={true} />

                        )
                }
            </View>

        </View>
    )
}

export default SelectLocation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    buttonView: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    }
});