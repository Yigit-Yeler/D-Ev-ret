import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const headerStyle = StyleSheet.create({
    main: {
        width: wp('100%'),
        height: hp('13%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontWeight: '600',
        fontSize: wp('6%'),
        paddingTop: hp('5%')
    }
});
