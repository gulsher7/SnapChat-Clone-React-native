//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, RefreshControl, ActivityIndicator } from 'react-native';
//constants
import imagePath from '../../constants/imagePath';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';
import styles from './styles';
import actions from '../../redux/actions';

//reusable components
import HomeHeader from '../../Components/HomeHeader';
import RoundImg from '../../Components/RoundImg';
import WrapperContainer from '../../Components/WrapperContainer';

let onEndReachedMomentum = false

const Chat = () => {
    const [state, setState] = useState({
        isLoading: false,
        isRefresh: false,
        loadeMore: false,
        data: [],
        page: 0
    })
    const { isLoading, isRefresh, data, page, loadeMore } = state

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    useEffect(() => {
        apiHit(true, page)
    }, [])

    const apiHit = async (val, page = 0, loadeMore = false) => {

        if (loadeMore) {
            updateState({ loadeMore: true })
        }
        if (val) {
            updateState({ isLoading: true })
        }
        
        else {
            updateState({ isRefresh: true })
        }

        try {
            const headers = { 'app-id': '60b3785ace6e48b83d6efce7' }
            const res = await actions.getUsers(`?limit=10&page=${page}`, headers)
            console.log("api res==<<<<", res.data)
            updateState({
                data: [...data, ...res.data],
                isLoading: false,
                isRefresh: false,
                page: page + 1,
                loadeMore: false
            })

        } catch (error) {
            console.log('error raised', error)
            updateState({ isLoading: false })
        }
    }

    const renderItem = ({ item, index }) => {
        // console.log("flat list item", item)
        return (
            <View style={styles.flatStyle}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <RoundImg image={item.picture} size={50} />
                    <View style={{ marginLeft: moderateScale(8) }}>
                        <Text style={styles.nameStyle}>{item.firstName}</Text>
                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            <Text style={styles.newSnapStyle}>New Snap</Text>
                            <Text style={styles.timeStyle}>{'1h'}</Text>
                            <Text style={styles.streakStyle} >{'120'}</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                    <RoundImg
                        image={'https://i.pinimg.com/originals/25/b9/24/25b924f1d18fea2c7dfcb26a9905c1e8.png'}
                        size={20}
                    />
                    <View style={styles.verticalLine} />

                    <Image style={styles.chatStyle} source={imagePath.icChat} />
                </View>
            </View>
        )
    }

    const handlRefresh = () => {
        apiHit(false)
    }

    const onEndReached = () => {
        apiHit(false, page, true)
    }
    return (
        <WrapperContainer isLoading={isLoading}>
            <HomeHeader
                centerText="Chat"
            />

            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.id}
                ItemSeparatorComponent={() => <View style={styles.lineStyle} />}
                onEndReachedThreshold={0.01}
                onMomentumScrollBegin={() => {
                    onEndReachedMomentum = false
                }}
                refreshControl={
                    <RefreshControl
                        refreshing={isRefresh}
                        onRefresh={handlRefresh}
                        tintColor="red"
                    />
                }
                ListFooterComponent={
                    loadeMore && (<View style={{ marginTop: moderateScaleVertical(20) }}>
                        <ActivityIndicator color="red" size="large" />
                    </View>)
                }
                onEndReached={onEndReached}
            />


        </WrapperContainer>
    );
};


export default Chat;
