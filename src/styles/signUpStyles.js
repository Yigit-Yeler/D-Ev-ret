import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const signUp = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center'
    },
    logo: {
        width: wp('100%'),
        height: hp('27%'),
    },
    textInputView: {
        width: wp('100%'),
        height: hp('50%'),
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textInput: {
        width: wp('90'),
        padding: wp('2.5%'),
        borderWidth: 3,
        borderColor: 'grey',

    },
    signUpView: {
        width: wp('100%'),
        height: hp('21%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    signUpButton: {
        width: wp('27%'),
        height: hp('7%'),
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
