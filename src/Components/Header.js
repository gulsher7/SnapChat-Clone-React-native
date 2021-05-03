//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import imagePath from '../constants/imagePath';

import { useNavigation } from '@react-navigation/native'
import { moderateScale } from '../styles/responsiveSize';
import colors from '../styles/colors';

const Header = ({
    leftImg = imagePath.icBack,
    onPress,
    headerStyle
}) => {
    const navigation = useNavigation()
    return (
        <View style={{...styles.headerStyle, ...headerStyle}}>
            <TouchableOpacity
                onPress={!!onPress ? onPress : () => navigation.goBack()}
            >
                <Image style={{tintColor: colors.blue}} source={leftImg} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
       headerStyle: {
           minHeight: moderateScale(48)
       }
    
});

export default Header;
