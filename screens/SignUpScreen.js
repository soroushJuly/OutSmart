import React, { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView, Platform, Alert } from "react-native";
import BaseButton from "../components/BaseButton";
import BaseTextInput from "../components/BaseTextInput";
import { registerUser } from "../utils/api/api-auth";
import { storeLogin } from "../store/authSlice";
import { useDispatch } from "react-redux";

function SignUp({ navigation }) {
    const [username, setUsername] = useState('mamad');
    const [password, setPassword] = useState('12345678aA@');
    const [confirmPassword, setConfirmPassword] = useState('12345678aA@');
    const [email, setEmail] = useState('11@ff.com');
    const [phone, setPhone] = useState('');

    const dispatch = useDispatch();


    async function handleSignUp() {
        const { data, message, success } = await registerUser({ username, password, email, confirmPassword });

        if (!success) {
            // setHasError(true);
            console.log('Error:', data);
            return;
        }

        // setHasError(false);
        // save token to local storage
        console.log('data', data);
        dispatch(storeLogin(data));

        Alert.alert('Success!', message);

        // navigate to home screen
        navigation.navigate('Tabs');

        // navigate to verify email screen
        // navigation.navigate('VerifyEmail');
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
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
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
        padding: 16,
    }
});