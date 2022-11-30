import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { themeColors } from '../../core/enum/themeColorsEnum';

const usualWidth = wp('100%')
const usualHeight = hp('20%')
export const createPostStyles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    dropDownButtonsView: {
        width: usualWidth,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    selectLocation: {
        width: usualWidth * 0.395,
        height: usualWidth * 0.395,
        backgroundColor: 'black',
        borderWidth: 3,
        borderColor: themeColors.secondary,

    },
    mapView: {
        width: usualWidth * 0.38,
        height: usualWidth * 0.38,
        overflow: 'hidden',
        borderRadius: 13
    },
    mapAndPhotoView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: usualWidth,
        alignItems: 'center'
    }
});
