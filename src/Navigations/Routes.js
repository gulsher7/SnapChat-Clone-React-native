import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import AuthStack from './AuthStack';
const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {AuthStack(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
    )
}