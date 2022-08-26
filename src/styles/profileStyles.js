import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const width = wp('100%')
export const profileStyles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center'
    },
    userInfo: {
        width: width,
        height: hp('20%'),
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'blue'
    },
    myPostsHeader: {
        width: width,
        height: hp('5%'),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    }
});
