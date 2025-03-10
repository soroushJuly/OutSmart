import React, { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView, Platform } from "react-native";
import BaseButton from "../components/BaseButton";
import BaseTextInput from "../components/BaseTextInput";
import { registerUser } from "../utils/api";

function SignUp({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    async function handleSignUp() {
        console.log({ username, password, email, phone });
        // const { data, success } = await registerUser({ username, password, email, phone });

        // if (success === false) {
        //     setHasError(true);
        //     return;
        // }

        // setHasError(false);
        // // save token to local storage
        // await SecureStore.setItemAsync('secure_token', data.token);
        // navigate to verify email screen
        navigation.navigate('VerifyEmail');
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Register</Text>
                <BaseTextInput
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
                <BaseTextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <BaseTextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <BaseTextInput
                    placeholder="Phone Number"
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                    style={{ marginBottom: 16 }}
                />
                <View style={{ marginHorizontal: 'auto' }}>
                    <BaseButton title="Sign Up" onPress={handleSignUp} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: 16,
    }
});