import React from 'react';
import navigationStrings from '../constants/navigationStrings';
import TabRoutes from './TabRoutes';


export default function (Stack) {
    console.log("this is my stack file")
    return (
        <>
            <Stack.Screen
                name={navigationStrings.CHAT}
                component={TabRoutes}
                options={{ headerShown: false }}
            />
    
        </>
    )
}