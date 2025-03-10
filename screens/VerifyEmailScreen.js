import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

function VerifyEmailScreen({ navigation }) {
    const [verificationCode, setVerificationCode] = useState('');

    const handleVerify = () => {
        // Handle verification logic here
        console.log("Verification code:", verificationCode);
        // Navigate to the next screen after verification
        navigation.navigate('Tabs');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Verify Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter verification code"
                value={verificationCode}
                onChangeText={setVerificationCode}
                keyboardType="numeric"
            />
            <Button title="Verify" onPress={handleVerify} />
        </View>
    );
}

export default VerifyEmailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        width: '100%',
        padding: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 16,
    },
});
