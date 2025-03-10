import axios from "axios";
import { LOGIN_URL } from "../constants/endpoints";

export function PostSignUp({ username, password }) {
    axios.post(BASE_URL + 'users.json', { username, password })
}

export function FetchUsers() {
    axios.get(BASE_URL + 'users.json')
}
// ------------ STATUS CHECKER ---------- //


// ------------ AUTH ---------- //
export async function loginUser({ username, password }) {
    try {
        const response = await axios.post(LOGIN_URL, {
            email: username,
            password
        });

        const data = response.data.data;
        const success = response.data.success;
        const message = response.data.message;
        return { success, data };
    } catch (error) {
        const data = error.response?.data?.data;
        const success = error.response.data.success;
        const message = error.response.data.message;
        return { success, message, data };
    }
};

export async function registerUser({ username, password }) {
    try {
        const response = await axios.post(REGISTER_URL, {
            username,
            password,
            email,
            phone
        });

        const data = response.data.data;
        const success = response.data.success;
        const message = response.data.message;
        return { success, data };
    } catch (error) {
        const data = error.response?.data?.data;
        const success = error.response.data.success;
        const message = error.response.data.message;
        return { success, message, data };
    }
};


