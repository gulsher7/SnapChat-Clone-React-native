//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Modal } from 'react-native';


const Loader = ({ isLoading = false }) => {
        if (isLoading) {
        return (
            <Modal transparent>
                <View style={styles.loaderStyle}>
                    <ActivityIndicator color="red" size={24} />
                </View>
            </Modal>
        )
    }
    return null;
};

// define your styles
const styles = StyleSheet.create({
    loaderStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)'
    }
});

//make this component available to the app
export default Loader;
