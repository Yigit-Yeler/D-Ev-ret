import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const usualWidth = wp('100%')
export const selectPhotoButtonStyles = StyleSheet.create({
    selectPhotoButton: {
        width: usualWidth * 0.38,
        height: usualWidth * 0.38,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: usualWidth * 0.19,
        height: usualWidth * 0.19,
    },
    otherImgCount: {
        position: 'absolute',
        width: usualWidth * 0.19,
        height: usualWidth * 0.19,
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
        width: usualWidth * 0.19,
        height: usualWidth * 0.19,
        justifyContent: 'center',
        alignItems: 'center',
    }
})