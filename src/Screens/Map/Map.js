//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MapView from 'react-native-maps';
import Circulerbtn from '../../Components/CirculerBtn';
import HomeHeader from '../../Components/HomeHeader';
import RoundImg from '../../Components/RoundImg';
import imagePath from '../../constants/imagePath';
import strings from '../../constants/lang';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import { moderateScale } from '../../styles/responsiveSize';


// create a component
const Map = () => {
    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={StyleSheet.absoluteFill}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />

            <View style={styles.headerView}>
                <HomeHeader
                    setting={imagePath.icSetting}
                    centerText="Panchkula"
                />
            </View>
            <View style={styles.bottomView}>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }}>
                    <Circulerbtn
                        text={strings.MY_BITMOJI}
                    />

                    <TouchableOpacity style={styles.navigationView}>
                        <Image source={imagePath.icNavigation} />
                    </TouchableOpacity>

                    <Circulerbtn
                        text={strings.FRIENDS}
                    />
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    bottomView: {
        position: 'absolute',
        bottom: 24,
        left: 24,
        right: 24,
    },
    headerView: {
        position: 'absolute',
        top: 36,
        left: 24,
        right: 24,
    },
    navigationView: {
        width: moderateScale(35),
        height: moderateScale(35),
        borderRadius: moderateScale(35 / 2),
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

//make this component available to the app
export default Map;
