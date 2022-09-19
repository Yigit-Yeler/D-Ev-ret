import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const usualWidth = wp('100%')
export const messageStyles = StyleSheet.create({
    main: {
        width: usualWidth,
        minHeight: hp('15%'),
        flexDirection: 'row',
        alignItems: 'center'
    },
    message: {
        maxWidth: usualWidth * 0.7,
        minHeight: hp('10%'),
        backgroundColor: 'black',
        padding: usualWidth * 0.02,
        borderRadius: usualWidth * 0.03,
        marginHorizontal: usualWidth * 0.03
    }
})