import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import BaseTextInput from '../../components/BaseTextInput';
import BaseButton from '../../components/BaseButton';
import { changeEmail } from '../../utils/api/api-auth';

function ChangeEmailScreen({ navigation }) {
    const [email, setEmail] = useState('11@dddgffff.comm');
    const [confirmEmail, setConfirmEmail] = useState('11@dddgffff.comm');

    async function handleChangeEmail() {
        if (email !== confirmEmail) {
            Alert.alert('Error', 'Email addresses do not match');
            return;
        }

        const { success, message } = await changeEmail({ email });

        if (success) {
            Alert.alert('Success', 'Email changed successfully');
            navigation.navigate('Tabs', { screen: 'StackAccount', params: { screen: 'AccountMain' } });
        } else {
            Alert.alert('Error', message);
        }
    }

    return (
        <View style={styles.container}>
            <BaseTextInput
                label="New Email"
                value={email}
                placeholder="Enter new email"
                onChangeText={setEmail}
                style={styles.input}
            />
            <BaseTextInput
                label="Confirm New Email"
                value={confirmEmail}
                placeholder="Confirm new email"
                onChangeText={setConfirmEmail}
                style={styles.input}
            />
            <BaseButton title="Change Email" onPress={handleChangeEmail} style={styles.button} />
        </View>
    );
}

export default ChangeEmailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
    },
    input: {
        marginBottom: 16,
    },
    button: {
        marginTop: 16,
    },
});