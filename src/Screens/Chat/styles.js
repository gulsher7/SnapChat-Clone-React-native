//import liraries
import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';

const styles = StyleSheet.create({
    flatStyle: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    nameStyle: {
        ...commonStyles.fontSize16,
        fontFamily: fontFamily.medium
    },
    newSnapStyle: {
        ...commonStyles.fontSize10,
        color: colors.red,

    },
    timeStyle: {
        ...commonStyles.fontSize10,
        marginHorizontal: moderateScale(6),
        color: colors.blackOpacity50

    },
    streakStyle: {
        ...commonStyles.fontSize10,
        fontFamily: fontFamily.bold
    },
    lineStyle: {
        borderBottomWidth: 0.4,
        borderBottomColor: colors.blackOpacity20,
        marginVertical:moderateScaleVertical(16)
    },
    verticalLine: {
        borderRightWidth: 1,
         borderColor: 'black', height: moderateScale(24),
         marginHorizontal: moderateScale(8),
         borderColor: colors.blackOpacity20
    },
    chatStyle: {
        height: 30, 
        width: 30,
        tintColor: colors.blackOpacity50
    },
    loadMoreStyle: {
        marginTop: moderateScaleVertical(12),
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
});

export default styles