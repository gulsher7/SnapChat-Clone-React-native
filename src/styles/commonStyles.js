import {StyleSheet} from 'react-native';
import colors from './colors';
import fontFamily from './fontFamily';
import { moderateScale, moderateScaleVertical, textScale } from './responsiveSize';


export default StyleSheet.create({
    fontSize10: {
        fontSize: textScale(10),
        fontFamily:fontFamily.regular,
        color: colors.black
    },
    fontSize12: {
        fontSize: textScale(12),
        fontFamily:fontFamily.regular,
        color: colors.black
    },
    fontSize14: {
        fontSize: textScale(14),
        fontFamily:fontFamily.regular,
        color: colors.black
    },
    fontSize16: {
        fontSize: textScale(16),
        fontFamily:fontFamily.regular,
        color: colors.black
    },
    fontSize20: {
        fontSize: textScale(20),
        fontFamily:fontFamily.regular,
        color: colors.black
    },
    fontSize24: {
        fontSize: textScale(24),
        color: colors.white,
        fontFamily: fontFamily.medium,
        textTransform: 'uppercase'
    },
})