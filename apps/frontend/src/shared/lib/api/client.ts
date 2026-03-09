import axios from 'axios';

/**
 * Shared Axios client – the only HTTP client allowed in the frontend.
 * All feature API modules must import and use this instance.
 * Components must never call axios.create() themselves.
 */
const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/v1',
    timeout: 10_000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Standard Axios instance. Interceptors are added in the AuthProvider to handle token management.
export default apiClient;
