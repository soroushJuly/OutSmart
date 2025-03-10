import axios from "axios";
import { PAYMENTS_URL } from "../../constants/endpoints";

export async function fetchPaymentSheetParams({ amount }) {
    try {
        const response = await axios.post(PAYMENTS_URL + '/create-payment-intent', {
            amount: parseFloat(amount) * 100, // Convert to cents,
            currency: 'gbp'
        });

        const { client_secret, customer } = await response.data;

        return {
            paymentIntentClientSecret: client_secret,
            customer,
        };
    } catch (error) {
        console.error('Error fetching payment sheet params:', error);
        Alert.alert('Error', 'Unable to process payment. Please try again.');
    }
}

export async function addCredit({ amount, userId }) {
    try {
        const response = await axios.post(PAYMENTS_URL + '/add-credit', {
            amount: parseFloat(amount) * 100, // Convert to cents,
            userId
        });

        const { success } = await response.data;
        console.log('/add-credit', success);

        return success;
    } catch (error) {
        console.error('Error adding credit:');
        console.log(error.response.data);
        Alert.alert('Error', 'Unable to add credit. Please try again.');
    }

}