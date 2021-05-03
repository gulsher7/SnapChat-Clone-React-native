import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import {
    InitialScreen,
    Login,
    Signup
} from '../Screens';

export default function (Stack) {
    console.log("this is my stack file")
    return (
        <>
            <Stack.Screen
                name={navigationStrings.INITIAL_SCREEN}
                component={InitialScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.LOGIN}
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name={navigationStrings.SIGNUP}
                component={Signup}
                options={{ headerShown: false }}
            />
        </>
    )
}