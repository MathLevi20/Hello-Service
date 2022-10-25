import * as React from 'react';
import { View, Text, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

export function Homescreen() {
    const navigation = useNavigation();
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title="Ir para as configurações" onPress={() => navigation.navigate('Settings')}></Button>
        </View>
    );
}