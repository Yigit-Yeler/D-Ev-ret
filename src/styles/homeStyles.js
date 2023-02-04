import { StyleSheet } from 'react-native';
import { themeColors } from '../../core/enum/themeColorsEnum';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const homeStyles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    filterButton: {
        backgroundColor: 'purple',
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: hp('2%'),
        width: wp('17%'),
        height: wp('17%'),
        right: wp('3%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12
    }
});
