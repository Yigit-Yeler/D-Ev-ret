import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { themeColors } from '../../core/enum/themeColorsEnum';
const { primary, secondary } = themeColors
export const signInStyles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'white'
    },
    logo: {
        width: wp('100%'),
    },
    textInputView: {
        width: wp('100%'),
        height: hp('25%'),
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    textInput: {
        width: wp('90'),
        padding: wp('2.5%'),
        borderWidth: 3,
        borderColor: secondary,
        borderRadius: wp('3%')

    },
    signUpView: {
        width: wp('100%'),
        justifyContent: 'center',
        alignItems: 'center'
    }
});
