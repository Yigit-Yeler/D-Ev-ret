import { StyleSheet } from 'react-native';
import { themeColors } from '../../core/enum/themeColorsEnum';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const splashStyles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    image: {
        width: wp('70%'),
        height: wp('70%'),
        borderRadius: wp('7%')
    },
    title: {
        fontSize: wp('6%')
    },
    text: {
        fontSize: wp('4%'),
        width: wp('50%'),
        textAlign: 'center'
    }
});
