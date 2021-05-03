//import liraries
import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    },
    headingText: {
        ...commonStyles.fontSize14,
        fontFamily: fontFamily.medium,
        alignSelf:'center',
        marginBottom:moderateScaleVertical(34)
    },
    forgotTextStyle: {
        ...commonStyles.fontSize12,
        color: colors.blue
    },
    btnStyle: {
        borderRadius: moderateScale(54),
        height: moderateScale(48),
        backgroundColor: colors.blackOpacity20,
        marginHorizontal: moderateScale(34)
    },
    textStyle: {
        ...commonStyles.fontSize14,
        color: colors.white,
        textTransform: 'none'
    }
});

export default styles