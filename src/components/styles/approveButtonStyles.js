import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { themeColors } from '../../../core/enum/themeColorsEnum';
const { primary, secondary } = themeColors
const usualWidth = wp('80%')
const usualHeight = hp('7%')

export const approveButtonStyles = StyleSheet.create({
    approveButton: {
        width: usualWidth,
        height: usualHeight,
        borderWidth: 1,
        borderColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: wp('3%')
    }
});
