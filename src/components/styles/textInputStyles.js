import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { themeColors } from '../../../core/enum/themeColorsEnum';

const usualWidth = wp('90%')
const usualHeight = hp('7%')

export const textInputStyles = StyleSheet.create({
    textInput: {
        width: wp('90'),
        padding: wp('2.5%'),
        borderWidth: 3,
        borderColor: themeColors.secondary,
        borderRadius: wp('3%')
    },
});
