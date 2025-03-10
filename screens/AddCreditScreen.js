import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';
import { fetchPaymentSheetParams, addCredit } from '../utils/api/api-payments';

function AddCreditScreen() {
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const [amount, setAmount] = useState('');

    const initializePaymentSheet = async () => {
        try {
            const {
                paymentIntentClientSecret,
                customer,
            } = await fetchPaymentSheetParams({ amount });

            const { error } = await initPaymentSheet({
                merchantDisplayName: "OutSmart",
                customerId: customer,
                paymentIntentClientSecret: paymentIntentClientSecret,
                allowsDelayedPaymentMethods: false,
            });

            if (error) {
                console.error('Error initializing payment sheet:', error);
                Alert.alert('Error', 'Unable to initialize payment. Please try again.');
            }
        } catch (error) {
            console.error('Error in initializePaymentSheet:', error);
        }
    };

    const openPaymentSheet = async () => {
        if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
            Alert.alert('Error', 'Please enter a valid amount');
            return;
        }

        try {
            await initializePaymentSheet();

            const { error } = await presentPaymentSheet();

            if (error) {
                Alert.alert('Error', error.message);
            } else {
                Alert.alert('Success', 'Payment completed successfully!');
                // APT call to Add credit to user's account
                addCredit({ amount, userId: 1 });
                setAmount('');
            }
        } catch (error) {
            console.error('Error in openPaymentSheet:', error);
            Alert.alert('Error', 'Payment failed. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Deposit</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter amount"
                keyboardType="numeric"
                value={amount}
                onChangeText={setAmount}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={openPaymentSheet}
            >
                <Text style={styles.buttonText}>Pay with Stripe</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 20,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#007AFF',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default AddCreditScreen;