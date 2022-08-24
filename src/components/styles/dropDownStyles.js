import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const usualWidth = wp('30%')
const usualHeight = wp('12%')

export const dropDownStyles = StyleSheet.create({
    dropDown: {
        width: usualWidth,
        height: usualHeight,
        borderWidth: 1,
        borderColor: 'grey'
    }
});
