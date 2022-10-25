import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, ImageBackground, Pressable, SafeAreaView } from 'react-native';
import tw from 'twrnc';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function SignIn() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (

        <ImageBackground source={require('./assets/test.png')} style={styles.background} >

            <View style={tw` justify-center items-center  w-full h-full`}>
                <View style={tw`items-center  justify-center  top-10  py-20 px-10  rounded-lg`}>
                    <Text style={tw`text-2xl pt-5 text-white`}>Login</Text>
                    <TextInput
                        style={tw`p-3 m-2 mt-5 border-2  text-white h-10 w-70  border-white bg-[#303030]  rounded-lg`}
                        value={email}
                        placeholder={"Email ..."}
                        placeholderTextColor={"#FFF"}
                        onChangeText={(text) => setEmail(text)}
                        autoCapitalize={"none"}
                    />
                    <TextInput
                        style={tw`p-3 m-2 mb-3 text-white  border-2  h-10 w-70 bg-white border-white  bg-[#303030]  rounded-lg`}
                        value={password}
                        placeholder={"Password ..."}
                        placeholderTextColor={"#FFF"}

                        onChangeText={(text) => setPassword(text)}
                    />
                    <View style={tw`   h-10 w-70 bg-white border-white   bg-[#303030]  rounded-lg`}
                    >
                        <Pressable onPress={() => navigation.navigate('SignUp')}>
                            <Text style={tw`text-white h-10   border-white  text-right   rounded-full`}>Fazer Login</Text>
                        </Pressable>
                        <Pressable onPress={() => SignIn(email, password)}>
                            <Text style={tw`p-3 mb-6 border-2 text-blue-400 h-12 w-70  border-blue-400  text-center   rounded-full`}>Logar</Text>
                        </Pressable>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 1, height: 1, backgroundColor: 'white', }} />
                            <View style={tw`text-white`}>
                                <Text style={{ width: 90, textAlign: 'center', color: "white" }}>Ou então</Text>
                            </View>
                            <View style={{ flex: 1, height: 1, backgroundColor: 'white' }} />
                        </View>
                        <Pressable onPress={() => { console.debug(email), console.debug(password) }}>
                            <Image source={require('./assets/google_t.png')} style={tw`left-6 top-5 `} />
                        </Pressable>
                    </View>
                    <StatusBar style="auto" />

                </View>
            </View>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: 400,
        height: 340,
        backgroundColor: "#303030"

    }, container: {
        flex: 1,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    }
})
