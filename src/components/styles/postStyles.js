import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { themeColors } from '../../../core/enum/themeColorsEnum';

const usualWidth = wp('100%')
const contentUsualWidth = usualWidth * 0.95

export const postStyles = StyleSheet.create({
    main: {
        width: usualWidth,
        height: hp('90%'),
        alignItems: 'center',
    },
    name: {
        width: contentUsualWidth,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    pp: {
        width: wp('7%'),
        height: wp('7%'),
        marginRight: wp('2%'),
        borderRadius: wp('5%'),
        marginVertical: wp('3%')
    },
    titleView: {
        width: contentUsualWidth,
        height: wp('25%'),
        justifyContent: 'space-around',

    },
    titleText: {
        fontSize: wp('6%'),
        fontWeight: '500'
    },
    descText: {

    },
    imgView: {
        width: usualWidth,
        height: wp('70%'),
        alignItems: 'center'
    },
    img: {
        width: wp('100%'),
        height: wp('70%'),
    },
    adressView: {
        width: contentUsualWidth,
        height: wp('25%'),
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    adress: {
        width: wp('55%')
    },
    location: {
        width: wp('17%'),
        height: wp('17%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple',
        borderRadius: wp('3%')
    },
    featuresView: {
        width: contentUsualWidth,
        height: wp('39%'),
    },
    features: {
        width: contentUsualWidth,
        height: wp('25%'),
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    featureView: {
        width: wp('50%'),
        flexDirection: 'row'
    },
    sendMessageView: {
        width: contentUsualWidth,
        height: wp('14%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: wp('3%')

    }
});
