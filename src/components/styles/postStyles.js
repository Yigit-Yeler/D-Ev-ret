import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { themeColors } from '../../../core/enum/themeColorsEnum';

const usualWidth = wp('93%')
const contentUsualWidth = usualWidth * 0.95

export const postStyles = StyleSheet.create({
    main: {
        width: usualWidth,
        height: usualWidth * 1.52,
        backgroundColor: themeColors.secondary,
        borderWidth: 2,
        borderColor: 'black',
        marginVertical: hp('2%'),
        borderRadius: wp('3%'),
        borderColor: themeColors.secondary,
        alignItems: 'center',
        paddingVertical: wp('2%')
    },
    name: {
        width: contentUsualWidth,
        alignItems: 'center',
        borderColor: 'white',

        borderBottomWidth: 1
    },
    titleView: {
        width: contentUsualWidth,
        height: wp('15%'),
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderColor: 'white'

    },
    titleText: {
        color: 'white'
    },
    descText: {
        color: 'white'

    },
    imgView: {
        width: contentUsualWidth,
        height: wp('50%'),
        alignItems: 'center'
    },
    img: {
        width: wp('50%'),
        height: wp('50%'),
        marginRight: wp('1.5%'),
        borderRadius: wp('3%')
    },
    adressView: {
        width: contentUsualWidth,
        height: wp('25%'),
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: 'white'
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
