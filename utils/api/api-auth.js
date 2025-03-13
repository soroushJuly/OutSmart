import axios from "axios";
import { LOGIN_URL, REGISTER_URL, PROFILE_URL } from "../../constants/endpoints";
import * as SecureStore from 'expo-secure-store';

// ------------ STATUS CHECKER ---------- //


// ------------ AUTH ---------- //
export async function loginUser({ username, password }) {
    try {
        const response = await axios.post(LOGIN_URL, {
            email: username,
            password
        });

        console.log('response', response.data);

        const data = response.data.data;
        const success = response.data.success;
        const message = response.data.message;
        return { success, data, message };
    } catch (error) {
        const data = error.response?.data;
        const success = error.response.data.success || false;
        const message = error.response.data.message;
        return { success, message, data };
    }
};

export async function registerUser({ username, password, confirmPassword, email }) {
    try {
        const response = await axios.post(REGISTER_URL, {
            username,
            password,
            email,
            confirmPassword
        });

        const data = response.data.data;
        const success = response.data.success;
        const message = response.data.message;
        return { success, message, data };
    } catch (error) {
        const data = error.response?.data;
        const success = error.response.data.success;
        const message = error.response.data.message;
        return { success, message, data };
    }
};


export async function getUser() {
    try {
        const token = await SecureStore.getItemAsync('secure_token');
        if (!token) {
            return { success: false, message: 'No token found' };
        }
        console.log('token', token);
        const response = await axios.get(PROFILE_URL, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });


        const data = response.data.data;
        const success = response.data.success;
        const message = response.data.message;
        return { success, data };
    } catch (error) {
        console.log(error);
        const data = error.response?.data?.data;
        const success = error.response.data.success;
        const message = error.response.data.message;
        return { success, message, data };
    }
};


