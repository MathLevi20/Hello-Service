import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Homescreen } from '../screen/HomeScreen';
import { SettingScreen } from '../screen/SettingsScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function AppStack() {
    return (

        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Home" component={Homescreen} />
            <Stack.Screen name="Settings" component={SettingScreen} />

        </Stack.Navigator>
    );
}