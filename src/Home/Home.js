import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BtnComp from '../Components/BtnComp';

import styles from './styles';

const Home = () => {
    const [number, setNumber] = useState(0)

    const _incDecValue = (type) => {
        if (type === 'increment') {
            if (number >= 20) {
                alert("Your value not grater than 20")
                return;
            }
            setNumber(number + 1)
            return;
        }
        if (number <= 0) {
            alert("Your value not less than 0")
            return;
        }
        setNumber(number - 1)
        return;

    }

    return (
        <View style={styles.myStyle}>
            <Text style={{
                color: 'white'
            }}>{number}</Text>


            <View style={{ flexDirection: 'row' }}>
                <BtnComp
                    btnText="Increment"
                    customOnPress={() => _incDecValue('increment')}
                />
                <View style={{ marginHorizontal: 8 }} />
                <BtnComp
                    btnText="Decrement"
                    customOnPress={() => _incDecValue('decrement')}
                    customOnPress={{ backgroundColor: 'red' }}
                />
            </View>
        </View>
    );
};

export default Home;
