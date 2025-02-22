import axios from "axios";
import { BASE_URL } from "../constants/urls";

export function PostSignUp({ username, password }) {
    axios.post(BASE_URL + 'users.json', { username, password })
}

export function FetchUsers() {
    axios.get(BASE_URL + 'users.json')
}


// ------------ AUTH ---------- //
export async function loginUser({ username, password }) {
    const response = await axios.post(BASE_URL + 'users.json', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: { username, password },
    });
    return response;
};
