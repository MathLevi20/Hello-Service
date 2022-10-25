import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Homescreen } from '../screen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { SignIn } from '../screen/SignInScreen';
import { SignUp } from '../screen/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack() {

    return (

        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
}