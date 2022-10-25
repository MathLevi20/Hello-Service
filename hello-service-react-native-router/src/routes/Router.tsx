import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppStack from './AppStack';
import AuthStack from './AppAuth';
import { AuthContext } from '../context/Auth';


export default function Router() {
    const authContext = React.useContext(AuthContext)
    return (
        <NavigationContainer>
            {authContext.authData ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
}