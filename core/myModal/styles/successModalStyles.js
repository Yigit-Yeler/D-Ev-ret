import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { themeColors } from "../../enum/themeColorsEnum";

const usualWidth = wp('70%')
const usualHeight = hp('40%')
export const successModalStyles = StyleSheet.create({
    main: {
        width: usualWidth,
        height: usualHeight,
        backgroundColor: themeColors.secondary,//#00e676
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: usualWidth * 0.1
    },
    button: {
        width: usualWidth * 0.5,
        height: usualHeight * 0.17,
        backgroundColor: 'purple',//#424242
        alignItems: "center",
        justifyContent: "center",
        borderRadius: usualWidth * 0.07
    },
    titleText: {
        fontSize: usualWidth * 0.1,
        color: 'white'
    }
})