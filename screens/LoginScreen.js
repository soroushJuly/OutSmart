import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native'
import BaseTextInput from '../components/BaseTextInput';
import BaseButton from '../components/BaseButton';
import { loginUser } from '../utils/api/api-auth';
import { useDispatch } from 'react-redux';
import { storeLogin } from '../store/authSlice';


function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('11@dddgffff.com');
    const [password, setPassword] = useState('12345678aA@');
    const [hasError, setHasError] = useState(false);
    const dispatch = useDispatch();

    function handleUsernameChange(value) {
        setUsername(value);
    }
    function handlePassword(value) {
        setPassword(value);
    }

    function handleBackPress() {
        navigation.navigate('Tabs');
    }

    async function handleLogin() {
        const { data, success, message } = await loginUser({ username, password });

        if (success === false) {
            setHasError(true);
            return;
        }

        setHasError(false);
        // save token to local storage
        dispatch(storeLogin({ token: data.token, user: data.user }));
        Alert.alert('Success!', message);
        // navigate to home screen
        navigation.navigate('Tabs');
    }

    function goToSignUp() {
        navigation.navigate('SignUp');
    }

    return (
        <View style={styles.screenContainer}>
            <BaseButton title="Back to Games List" onPress={handleBackPress} style={{ marginBottom: 10 }} />
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