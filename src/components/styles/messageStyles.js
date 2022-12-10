import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { themeColors } from '../../../core/enum/themeColorsEnum';

const usualWidth = wp('100%')
export const messageStyles = StyleSheet.create({
    main: {
        width: usualWidth,
        minHeight: hp('13%'),
        flexDirection: 'row',
        alignItems: 'center'
    },
    message: {
        maxWidth: usualWidth * 0.7,
        minHeight: hp('10%'),
        backgroundColor: themeColors.secondary,
        padding: usualWidth * 0.04,
        borderRadius: usualWidth * 0.03,
        marginHorizontal: usualWidth * 0.03,
    }
})