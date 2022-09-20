import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
export const chatStyles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    flatView: {
        height: hp('90%'),
        width: wp('100%'),
        marginBottom: hp('10%')
    },
    messageInput: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: wp('100%'),
        height: hp('10%'),
    },
    textInput: {
        width: wp('80%'),
        height: hp('6%'),
        borderWidth: 2,
        borderColor: 'purple',
        padding: wp('3%'),
        borderRadius: wp('3%')
    }
})