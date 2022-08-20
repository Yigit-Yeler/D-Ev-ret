import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const usualWidth = wp('90%')
const contentUsualWidth = usualWidth * 0.99

export const postStyles = StyleSheet.create({
    main: {
        width: usualWidth,
        height: usualWidth,
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
        borderBottomWidth: 1
    },
    img: {
        width: wp('10%'),
        height: wp('10%')
    }
});
