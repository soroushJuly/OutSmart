import { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import BaseTextInput from '../components/BaseTextInput';
import BaseButton from '../components/BaseButton';


function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsername(value) {
        setUsername(value);
    }
    function handlePassword(value) {
        setPassword(value);
    }

    function goToHome() {
        navigation.navigate('Home');
    }

    function goToSignUp() {
        navigation.navigate('SignUp');
    }


    return (
        <View style={styles.screenContainer}>
            <Text style={styles.h1}>Login</Text>
            <View style={styles.inputContainer}>
                <BaseTextInput label="Username" value={username} placeholder='Username' onChange={handleUsername} style={{ marginBottom: 10 }} />
                <BaseTextInput label="Password" value={password} placeholder='password' onChange={handlePassword} isSensitive={true} />
            </View>
            <BaseButton title="Login" onPress={goToHome} style={{ marginBottom: 10 }} />
            <BaseButton title="Sign Up" onPress={goToSignUp} />
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 24
    },
    inputContainer: {
        width: '80%',
        marginBottom: 30
    },
    h1: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 24
    }
})