import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const usualWidth = wp('90%')
const contentUsualWidth = usualWidth * 0.99

export const postStyles = StyleSheet.create({
    main: {
        width: usualWidth,
        height: usualWidth * 1.5,
        backgroundColor: 'red',
        borderWidth: 2,
        borderColor: 'black'
    },
    name: {
        width: contentUsualWidth,
        alignItems: 'center',
        borderBottomWidth: 1
    },
    titleView: {
        width: contentUsualWidth,
        height: wp('15%'),
        justifyContent: 'space-around',
        borderBottomWidth: 1
    },
    titleText: {

    },
    descText: {

    },
    imgView: {
        width: contentUsualWidth,
        height: wp('50%'),
        borderBottomWidth: 1,
    },
    img: {
        width: wp('50%'),
        height: wp('50%'),
        marginRight: wp('1.5%')
    },
    adressView: {
        width: contentUsualWidth,
        height: wp('25%'),
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    adress: {
        width: wp('55%')
    },
    location: {
        width: wp('17%'),
        height: wp('17%'),
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    featuresView: {
        width: contentUsualWidth,
        height: wp('39%'),
        borderBottomWidth: 1
    },
    features: {
        width: contentUsualWidth,
        height: wp('25%'),
        borderBottomWidth: 1,
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
        borderBottomWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple'

    }
});
