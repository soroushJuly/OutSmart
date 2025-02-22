import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import BaseTextInput from '../components/BaseTextInput';
import BaseButton from '../components/BaseButton';
import { useDispatch } from 'react-redux';
import { updateAuth } from '../store/authSlice';
import { loginUser } from '../utils/api';


function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsername(value) {
        setUsername(value);
    }
    function handlePassword(value) {
        setPassword(value);
    }

    async function handleLogin() {
        const data = await loginUser({ username: 'sa', password: 'g' });
        console.log(data);
        // dispatch(updateAuth());
        navigation.navigate('Tabs');
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