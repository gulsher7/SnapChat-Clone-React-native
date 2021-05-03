//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import colors from '../styles/colors';
import { moderateScale } from '../styles/responsiveSize';
import Loader from './Loader';


// create a component
const WrapperContainer = ({
    barStyle = "dark-content",
    statusBarColor = colors.white,
    children,
    isLoading
}) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={barStyle} backgroundColor={statusBarColor} />
            <SafeAreaView style={{flex:1}}>
                {children}
            </SafeAreaView>
            <Loader isLoading={isLoading} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: moderateScale(24)
    },
});
export default WrapperContainer;
