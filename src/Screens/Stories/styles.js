//import liraries
import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical, width } from '../../styles/responsiveSize';

const styles = StyleSheet.create({
    flatStyle: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    nameStyle: {
        ...commonStyles.fontSize14,
        fontFamily: fontFamily.medium,
        marginTop: moderateScaleVertical(6)
    },
    headerStyle: {
        ...commonStyles.fontSize16,
        fontFamily: fontFamily.bold,
        marginHorizontal: moderateScale(24),
        marginVertical: moderateScaleVertical(8)
    },
    quickStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: colors.white,
        borderRadius: moderateScale(8),
        shadowColor: colors.blackOpacity30,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        margin: 2,
        padding: moderateScale(8),
        width: width / 1.24
    },
    btnStyle: {
        backgroundColor: colors.blackOpacity10,
        paddingHorizontal: moderateScale(8),
        paddingVertical: moderateScaleVertical(4),
        borderRadius: moderateScale(16)
    },
    subscriptionView: {
        height: moderateScale(180),
        width: moderateScale(120),
        justifyContent: 'flex-end',
        padding: moderateScale(8)
    },
    discoverStyle: {
        height: moderateScale(180),
        // width: moderateScale(120),
        justifyContent: 'flex-end',
        padding: moderateScale(8),
        flex: 1,
        marginHorizontal: 8
    }
});

export default styles