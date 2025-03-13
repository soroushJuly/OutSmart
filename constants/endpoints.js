export const BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL;
// First layer of endpoints
export const PAYMENTS_URL = BASE_URL + '/payments';
export const AUTH_URL = BASE_URL + '/auth';
export const FAQ_URL = BASE_URL + '/faq';
// Second layer of endpoints
export const LOGIN_URL = AUTH_URL + '/login';
export const REGISTER_URL = AUTH_URL + '/register';
export const PROFILE_URL = AUTH_URL + '/profile';
export const FAQ_ALL_URL = FAQ_URL + '/all';