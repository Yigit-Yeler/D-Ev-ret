import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const usualHeight = hp('60%')
const usualWidth = wp('90%')

export const updateProfileStyles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center'
    },
    infoView: {
        width: usualWidth,
        height: usualHeight,
        borderWidth: 1,
        borderColor: 'grey',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: hp('3%')
    },
    profileImg: {
        width: wp('30%'),
        height: wp('30%'),
        borderRadius: wp('30%') * 0.5
    }
});
