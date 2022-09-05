import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const signInStyles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
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
        borderColor: 'grey',

    },
    signUpView: {
        width: wp('100%'),
        justifyContent: 'center',
        alignItems: 'center'
    }
});
