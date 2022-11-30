import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { themeColors } from '../../../core/enum/themeColorsEnum';

const usualWidth = wp('30%')
const usualHeight = hp('7%')

export const dropDownStyles = StyleSheet.create({
    dropDown: {
        width: usualWidth,
        height: usualHeight,
        borderWidth: 3,
        borderColor: themeColors.secondary,
        borderRadius: wp('3%'),
        padding: wp('2%')
    }
});
