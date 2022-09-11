import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const usualWidth = wp('100%')
const usualHeight = hp('100%')
export const selectLocationStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    map: {
        width: usualWidth,
        height: usualHeight
    },
    buttonView: {
        width: usualWidth,
        height: usualHeight * 0.1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    }
});