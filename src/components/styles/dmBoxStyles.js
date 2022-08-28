import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const usualWidth = wp('90%')
const usualHeight = hp('13%')

export const dmBoxStyles = StyleSheet.create({
    dmBox: {
        width: usualWidth,
        height: usualHeight,
        backgroundColor: 'grey',
        alignItems: 'center',
        marginVertical: hp('2%'),
        borderRadius: wp('3%')
    },
    title: {
        width: usualWidth * 0.9,
        height: usualHeight * 0.5,
        justifyContent: 'center'
    },
    titleText: {
        fontSize: hp('2.5%'),
        fontWeight: '900'
    },
    lastMassage: {
        width: usualWidth * 0.8,
        height: usualHeight * 0.4,
        justifyContent: 'center',
    },
    lastMassageText: {
        fontSize: hp('1.7%'),
        fontWeight: '300'
    },
});
