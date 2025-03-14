import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import BaseTextInput from '../../components/BaseTextInput';
import BaseButton from '../../components/BaseButton';
import { changePassword } from '../../utils/api/api-auth';

function ChangePasswordScreen({ navigation }) {
    const [currentPassword, setCurrentPassword] = useState('12345678aA@');
    const [newPassword, setNewPassword] = useState('12345678aA@a');
    const [confirmPassword, setConfirmPassword] = useState('12345678aA@a');

    async function handleChangePassword() {
        if (newPassword !== confirmPassword) {
            Alert.alert('Error', 'New passwords do not match');
            return;
        }

        const { success, message } = await changePassword({ currentPassword, newPassword });

        if (success) {
            Alert.alert('Success', 'Password changed successfully');
            navigation.navigate('Tabs', { screen: 'StackAccount', params: { screen: 'AccountMain' } });
        } else {
            Alert.alert('Error', message);
        }
    }

    return (
        <View style={styles.container}>
            <BaseTextInput
                label="Current Password"
                value={currentPassword}
                placeholder="Enter current password"
                onChangeText={setCurrentPassword}
                isSensitive={true}
                style={styles.input}
            />
            <BaseTextInput
                label="New Password"
                value={newPassword}
                placeholder="Enter new password"
                onChangeText={setNewPassword}
                isSensitive={true}
                style={styles.input}
            />
            <BaseTextInput
                label="Confirm New Password"
                value={confirmPassword}
                placeholder="Confirm new password"
                onChangeText={setConfirmPassword}
                isSensitive={true}
                style={styles.input}
            />
            <BaseButton title="Change Password" onPress={handleChangePassword} style={styles.button} />
        </View>
    );
}

export default ChangePasswordScreen;

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