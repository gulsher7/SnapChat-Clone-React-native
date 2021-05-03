//import liraries
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
//constants
import strings from '../../constants/lang';
import styles from './styles';
//reusable components
import Header from '../../Components/Header';
import TextinputWithLable from '../../Components/TextinputWithLable';
import WrapperContainer from '../../Components/WrapperContainer';
import BtnComp from '../../Components/BtnComp';

const Login = () => {
    const [state, setState] = useState({
        isLoading: false,
        email: '',
        password: '',
        isSecure: true
    })
    const { isLoading, email, password, isSecure } = state

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    return (
        <WrapperContainer isLoading={isLoading}>
            <Header />
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View>

                <Text style={styles.headingText}>{strings.LOGIN}</Text>
                    <TextinputWithLable
                        label={strings.USERNAME_OR_EMAIL}
                        value={email}
                        placeholder={strings.PLEASE_ENTER_YOUR_EMAIL}
                        onChangeText={(email) => updateState({ email })}
                    />
                    <TextinputWithLable
                        label={strings.PASSWORD}
                        value={password}
                        placeholder={strings.PLEASE_ENTER_YOUR_PASSWORD}
                        onChangeText={(password) => updateState({ password })}
                        secureTextEntry={isSecure}
                        isSecure={isSecure}
                        onPressSecure={() => updateState({ isSecure: !isSecure })}
                    />
                    <TouchableOpacity style={{ alignSelf: 'center' }}>
                        <Text style={styles.forgotTextStyle}>{strings.FORGOT_YOUR_PASSWORD}</Text>
                    </TouchableOpacity>
                </View>
                <BtnComp
                    btnStyle={styles.btnStyle}
                    btnText={strings.LOGIN}
                    textStyle={styles.textStyle}
                />
            </View>
        </WrapperContainer>
    );
};
export default Login;
