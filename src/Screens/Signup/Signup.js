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

const Signup = () => {
    const [state, setState] = useState({
        isLoading: false,
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        isSecure: true
    })
    const { isLoading, email, password, firstName, lastName, userName, isSecure } = state

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    const onSignup = () => {
        alert("Signup")
    }

    return (
        <WrapperContainer isLoading={isLoading}>
            <Header />
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View>

                    <Text style={styles.headingText}>{strings.CREATE_YOUR_ACCOUNT}</Text>
                    <TextinputWithLable
                        label={strings.FIRST_NAME}
                        value={firstName}
                        placeholder={strings.ENTER_YOUR_FIRST_NAME}
                        onChangeText={(firstName) => updateState({ firstName })}
                    />
                    <TextinputWithLable
                        label={strings.LAST_NAME}
                        value={lastName}
                        placeholder={strings.ENTER_YOUR_LAST_NAME}
                        onChangeText={(lastName) => updateState({ lastName })}
                    />
                    <TextinputWithLable
                        label={strings.USER_NAME}
                        value={userName}
                        placeholder={strings.ENTER_YOUR_USER_NAME}
                        onChangeText={(userName) => updateState({ userName })}
                    />
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
                    btnText={strings.SIGNUP_AND_ACCEPT}
                    textStyle={styles.textStyle}
                    onPress={onSignup}
                />
            </View>
        </WrapperContainer>
    );
};
export default Signup;
