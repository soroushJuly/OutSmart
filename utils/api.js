import axios from "axios";

const BASE_URL = 'https://react-native-test-253c4-default-rtdb.firebaseio.com/'
export function PostLogin({ username, password }) {
    axios.post(BASE_URL + 'users.json', { username, password })
}

export function PostSignUp({ username, password }) {
    axios.post(BASE_URL + 'users.json', { username, password })
}

export function FetchUsers() {
    axios.get(BASE_URL + 'users.json')
}