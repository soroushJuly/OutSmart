import { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native'

function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function GoToHome() {
        navigation.navigate('Home');
    }
    return (
        <View>
            <Text>Login Screen</Text>
            <View>
                <TextInput value={username} placeholder='Username' />
                <TextInput value={password} placeholder='Password' />
            </View>
            <Button title='Home' onPress={GoToHome} />
        </View>
    )
}

export default LoginScreen;