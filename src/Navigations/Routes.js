import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { useSelector } from 'react-redux';

import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Stack = createStackNavigator();

export default function Routes() {
    const isLogin = useSelector((state) => state.auth.isLogin)
    console.log("isLogin", isLogin)
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {true ? MainStack(Stack)
                    :
                    AuthStack(Stack)
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}