//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
//constants
import imagePath from '../../constants/imagePath';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';
import styles from './styles';
import actions from '../../redux/actions';

//reusable components
import HomeHeader from '../../Components/HomeHeader';
import RoundImg from '../../Components/RoundImg';
import WrapperContainer from '../../Components/WrapperContainer';
import { data } from '../../constants/data';
import commonStyles from '../../styles/commonStyles';
import strings from '../../constants/lang';
import colors from '../../styles/colors';


const Stories = () => {
    const [state, setState] = useState({
        isLoading: false
    })
    const { isLoading } = state

    const renderStories = ({ item, index }) => {
        return (
            <View style={{ alignItems: 'center' }}>
                <RoundImg
                    image={item.img}
                    size={80}
                />
                <Text style={styles.nameStyle} >{item.name}</Text>
            </View>
        )
    }

    const renderQuickAdd = ({ item, index }) => {
        return (
            <View style={styles.quickStyle}>

                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                    <RoundImg
                        image={item.img}
                        size={50}
                    />
                    <View style={{ marginLeft: moderateScale(8) }}>
                        <Text>{item.name}</Text>
                        <Text>Recently Joined</Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                    <TouchableOpacity
                        style={styles.btnStyle}
                    >
                        <Text>+Add</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={{ marginLeft: moderateScale(8) }}>
                        <Image source={imagePath.icClose} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const renderSubcription = ({ item, index }) => {
        return (
            <ImageBackground
                source={{ uri: item.img }}
                borderRadius={8}
                style={styles.subscriptionView}
            >
                <View>
                    <Text style={{ ...styles.nameStyle, color: colors.white }}>{item.name}</Text>
                    <Text style={{ ...commonStyles.fontSize12, color: colors.white }}>Mon</Text>
                </View>
            </ImageBackground>
        )
    }

    const renderDiscover = ({ item, index }) => {
        return (
            <ImageBackground
                source={{ uri: item.img }}
                borderRadius={8}
                style={styles.discoverStyle}
            >
                <View>
                    <Text style={{ ...styles.nameStyle, color: colors.white }}>{item.name}</Text>
                    <Text style={{ ...commonStyles.fontSize12, color: colors.white }}>Mon</Text>
                </View>
            </ImageBackground>
        )
    }
    return (
        <WrapperContainer style={{ padding: 0 }} isLoading={isLoading}>
            <HomeHeader headerStyle={{ paddingHorizontal: moderateScale(24) }} centerText={strings.STORIES} />
            <ScrollView showsVerticalScrollIndicator={false}  style={{ flex: 1 }}>
                <Text style={styles.headerStyle}>{strings.FRIENDS}</Text>
                <View style={{}}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={data}
                        renderItem={renderStories}
                        keyExtractor={(item, index) => item.id.toString()}
                        ItemSeparatorComponent={() => <View style={{ marginLeft: moderateScale(16) }} />}
                        ListHeaderComponent={() => <View style={{ marginLeft: moderateScale(24) }} />}
                        ListFooterComponent={() => <View style={{ marginRight: moderateScale(24) }} />}
                    />
                </View>
                <View style={{ marginTop: moderateScaleVertical(16) }}>
                    <Text style={styles.headerStyle}>{strings.QUICK_ADD}</Text>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={data}
                        renderItem={renderQuickAdd}
                        keyExtractor={(item, index) => item.id.toString()}
                        ItemSeparatorComponent={() => <View style={{ marginLeft: moderateScale(16) }} />}
                        ListHeaderComponent={() => <View style={{ marginLeft: moderateScale(24) }} />}
                        ListFooterComponent={() => <View style={{ marginRight: moderateScale(24) }} />}
                    />
                </View>

                <View style={{ marginTop: moderateScaleVertical(16) }}>
                    <Text style={styles.headerStyle}>{strings.SUBSCRIPTION}</Text>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={data}
                        renderItem={renderSubcription}
                        keyExtractor={(item, index) => item.id.toString()}
                        ItemSeparatorComponent={() => <View style={{ marginLeft: moderateScale(16) }} />}
                        ListHeaderComponent={() => <View style={{ marginLeft: moderateScale(24) }} />}
                        ListFooterComponent={() => <View style={{ marginRight: moderateScale(24) }} />}
                    />
                </View>

                <View style={{ margin: moderateScaleVertical(16) }}>
                    <Text style={styles.headerStyle}>{strings.DISCOVER}</Text>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        data={data}
                        renderItem={renderDiscover}
                        keyExtractor={(item, index) => item.id.toString()}
                        ItemSeparatorComponent={() => <View style={{ marginBottom: moderateScale(8) }} />}

                    />
                </View>
            </ScrollView>
        </WrapperContainer>
    );
};


export default Stories;
