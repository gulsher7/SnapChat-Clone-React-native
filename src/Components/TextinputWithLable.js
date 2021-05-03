//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';
import fontFamily from '../styles/fontFamily';
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize';

// create a component
const TextinputWithLable = ({
    label,
    value,
    placeholder,
    onChangeText,
    inputStyle,
    textStyle,
    isSecure,
    onPressSecure,
    ...props
}) => {
    return (
        <View style={{ marginBottom: moderateScaleVertical(16) }} >
            <Text style={styles.labelStyle}>{label}</Text>
            <View style={{ ...styles.inputStyle, ...inputStyle }}>
                <TextInput
                    value={value}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    style={{ ...styles.textStyle, ...textStyle }}
                    {...props}
                />
                {!!onPressSecure && (
                    <TouchableOpacity onPress={onPressSecure} style={{ marginLeft: moderateScale(6) }}>
                        <Image source={isSecure ? imagePath.icHide : imagePath.icShow} />
                    </TouchableOpacity>)}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1.5,
        padding: 8,
        borderBottomColor: colors.blackOpacity20
    },
    labelStyle: {
        ...commonStyles.fontSize12,
        textTransform: 'uppercase',
        fontFamily: fontFamily.medium,
        color: colors.blackOpacity50
    },
    textStyle: {
        ...commonStyles.fontSize14,
        flex: 1
    }
});
export default TextinputWithLable;
