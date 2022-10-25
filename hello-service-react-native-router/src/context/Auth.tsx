import React, { createContext, FunctionComponent, ReactNode, useContext, useEffect, useState } from 'react';
import { authService } from '../services/AuthService';

export interface AuthData {

    token: string;
    email: string;
    name: string;

}
interface Props {
    children?: React.ReactNode;
  }

interface AuthContextData {
    authData?: AuthData;
    SignIn: (email: string, password: string) => Promise<AuthData>;
    SignOut: () => Promise<void>;
}
export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider:  React.FC<Props> = ({ children }) => {
    const [authData, SetAuth] = useState<AuthData>();

    async function SignIn(email: string, password: string): Promise<AuthData> {
        const auth = await authService.signIn(email, password)
        SetAuth(authData)
        return auth;
    }
    async function SignOut(): Promise<void> {
        SetAuth(undefined)
        return
    }

    return (
        <AuthContext.Provider value={{ authData, SignIn, SignOut }}>
            {children}
        </AuthContext.Provider>
    );
};
