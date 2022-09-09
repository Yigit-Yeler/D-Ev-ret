import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const SelectLocation = () => {
    const mapEvent = (e) => {
        console.log(e.nativeEvent.coordinate)
    }
    return (
        <View style={styles.container}>
            <MapView
                onPress={(e) => { mapEvent(e) }}
                style={styles.map}
            />
        </View>
    )
}

export default SelectLocation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});