import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { themeColors } from '../../../core/enum/themeColorsEnum';
const { primary, secondary } = themeColors

export const filterModalStyles = StyleSheet.create({
    main: {
        width: wp('100%'),
        height: hp('40%'),
        backgroundColor: 'white',
        borderTopEndRadius: wp('100%') / 10,
        borderTopStartRadius: wp('100%') / 10,
        opacity: 0.8,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
});
