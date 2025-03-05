import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import BaseTextInput from '../components/BaseTextInput';
import BaseButton from '../components/BaseButton';
import { useDispatch } from 'react-redux';
import { updateAuth } from '../store/authSlice';
import { loginUser } from '../utils/api';
import * as SecureStore from 'expo-secure-store';


function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('ali@test.comm');
    const [password, setPassword] = useState('12345678aA@');
    const [hasError, setHasError] = useState(false);

    function handleUsernameChange(value) {
        setUsername(value);
    }
    function handlePassword(value) {
        setPassword(value);
    }

    useEffect(() => {
        console.log('login screen mounted');
    }, []);

    async function handleLogin() {
        // const token = await SecureStore.getItemAsync('secure_token');
        const { data, success } = await loginUser({ username, password });

        if (success === false) {
            setHasError(true);
            return;
        }

        // save token to local storage
        await SecureStore.setItemAsync('secure_token', data.token);
        console.log('token:', token);
        // navigate to home screen
        navigation.navigate('Tabs');
    }

    function goToSignUp() {
        navigation.navigate('SignUp');
    }


    return (
        <View style={styles.screenContainer}>
            <Text style={styles.h1}>Login</Text>
            <View style={styles.inputContainer}>
                <BaseTextInput label="Username" value={username} placeholder='Username' onChangeText={handleUsernameChange} style={{ marginBottom: 10 }} />
                <BaseTextInput label="Password" value={password} placeholder='password' onChange={handlePassword} isSensitive={true} />
            </View>
            {hasError && <Text style={{ color: 'red' }}>Invalid username or password</Text>}
            <BaseButton title="Login" onPress={handleLogin} style={{ marginBottom: 10 }} />
            <BaseButton title="Sign Up" onPress={goToSignUp} />
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24
    },
    inputContainer: {
        width: '80%',
        marginBottom: 30
    },
    h1: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 24
    }
})