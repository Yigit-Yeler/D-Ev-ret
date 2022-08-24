import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const usualWidth = wp('90%')
const usualHeight = hp('7%')

export const textInputStyles = StyleSheet.create({
    textInput: {
        width: usualWidth,
        height: usualHeight,
        borderWidth: 1,
        borderColor: 'grey'
    }
});
