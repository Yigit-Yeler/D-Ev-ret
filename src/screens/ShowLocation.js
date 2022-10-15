import { View, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import React from 'react'
import { selectLocationStyles } from '../styles/selectLocationStyles';

const ShowLocation = ({ route }) => {
    const { latitude, longitude } = route.params.location

    return (
        <View>
            <MapView
                style={selectLocationStyles.map}

                region={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 10,
                    longitudeDelta: 10
                }}
            >
                <Marker
                    coordinate={{ latitude, longitude }}
                />
            </MapView>
        </View>
    )
}

export default ShowLocation