//import liraries
import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
//constants
import strings from '../../constants/lang';
import styles from './styles';
//reusable components
import Header from '../../Components/Header';
import TextinputWithLable from '../../Components/TextinputWithLable';
import WrapperContainer from '../../Components/WrapperContainer';
import BtnComp from '../../Components/BtnComp';
import colors from '../../styles/colors';
import actions from '../../redux/actions';

const Login = () => {
    const [state, setState] = useState({
        isLoading: false,
        email: '',
        password: '',
        isSecure: true,
        isEnable: false
    })
    const { isLoading, email, password, isSecure, isEnable } = state

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    useEffect(() => {
        if (email !== '' && password !== '') {
            updateState({ isEnable: true })
            return;
        }
        updateState({ isEnable: false })
    }, [email, password])

    const onLogin = () => {
        actions.login(true)
        alert("Login Success!!!")
    }

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
                    isDisable={!isEnable}
                    btnStyle={{ ...styles.btnStyle, backgroundColor: isEnable ? colors.blue : colors.blackOpacity20 }}
                    btnText={strings.LOGIN}
                    textStyle={styles.textStyle}
                    onPress={onLogin}
                />
            </View>
        </WrapperContainer>
    );
};
export default Login;
