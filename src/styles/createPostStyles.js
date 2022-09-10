import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const usualWidth = wp('100%')
const usualHeight = hp('20%')
export const createPostStyles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    dropDownButtonsView: {
        width: usualWidth,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    selectLocation: {
        width: usualWidth * 0.6,
        height: hp('15%'),
        backgroundColor: 'black'
    },
    mapView: {
        width: usualWidth * 0.6,
        height: hp('15%')
    }
});
