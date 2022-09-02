import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const usualWidth = wp('90%')
export const bottomTextStyles = StyleSheet.create({
    main: {
        width: usualWidth,
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: "center"
    },
    text: {
        color: 'grey'
    },
    clickText: {
        color: 'white'
    }
})