import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as SecureStore from 'expo-secure-store';

export const storeLogin = createAsyncThunk(
    'auth/storeLogin',
    async (data, thunkAPI) => {
        await SecureStore.setItemAsync('secure_token', data.token);
        return data;
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (data, thunkAPI) => {
        await SecureStore.setItemAsync('secure_token', '');
        return data;
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: { isAuthenticated: false, user: null },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(storeLogin.fulfilled, (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload.user;
        });
        builder.addCase(logout.fulfilled, (state, action) => {
            state.isAuthenticated = false;
            state.user = null;
        });
    },
});

// Selectors
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;