import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { themeColors } from "../../../core/enum/themeColorsEnum";

const usualWidth = wp('100%')
export const selectPhotoButtonStyles = StyleSheet.create({
    selectPhotoButton: {
        width: usualWidth * 0.40,
        height: usualWidth * 0.40,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: themeColors.secondary,
    },
    img: {
        width: usualWidth * 0.20,
        height: usualWidth * 0.20,
    },
    otherImgCount: {
        position: 'absolute',
        width: usualWidth * 0.20,
        height: usualWidth * 0.20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        opacity: 0.4
    },
    numText: {
        fontSize: wp('6%'),
        fontWeight: "500",
        color: 'white'
    },
    otherImgCountText: {
        position: 'absolute',
        width: usualWidth * 0.20,
        height: usualWidth * 0.20,
        justifyContent: 'center',
        alignItems: 'center',
    }
})