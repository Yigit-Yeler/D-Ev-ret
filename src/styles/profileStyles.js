import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { themeColors } from '../../core/enum/themeColorsEnum';

const width = wp('100%')
const height = hp('100%')
export const profileStyles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center'
    },
    myPostsHeader: {
        width: width,
        height: hp('5%'),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'purple',
        borderBottomStartRadius: width * 0.05,
        borderBottomEndRadius: width * 0.05,
    },
    myPosts: {
        flex: 0.65
    },
    profileCardHeader: {
        flex: 0.35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: themeColors.secondary,
        width: width,
        // borderRadius: width * 0.1
    },
    profileCardHeaderContent: {
        width: width * 0.4,
        height: height * 0.12,
    },
    pp: {
        width: width * 0.3,
        height: width * 0.3,
        borderRadius: width * 0.5
    },
    logout: {
        backgroundColor: 'purple',
        width: width * 0.18,
        height: height * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width * 0.03
    }
});
