import { createSlice } from '@reduxjs/toolkit';
// import { loginUser } from '../utils/api';

const authSlice = createSlice({
    name: 'auth',
    initialState: { isAuthenticated: false, user: null },
    reducers: {
        updateAuth: (state, { }) => {
            console.log(state);
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;