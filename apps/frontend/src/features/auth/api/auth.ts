import apiClient from '@/shared/lib/api/client';

export interface User {
    id: string;
    email: string;
    name: string;
}

export interface LoginResponse {
    accessToken: string;
}

export const authApi = {
    login: async (credentials: any): Promise<LoginResponse> => {
        const { data } = await apiClient.post('/auth/login', credentials);
        return data;
    },

    register: async (details: any): Promise<User> => {
        const { data } = await apiClient.post('/auth/register', details);
        return data;
    },

    logout: async (): Promise<void> => {
        await apiClient.post('/auth/logout');
    },

    refresh: async (): Promise<{ accessToken: string }> => {
        const { data } = await apiClient.post('/auth/refresh');
        return data;
    },

    getMe: async (): Promise<User> => {
        const { data } = await apiClient.get('/auth/me');
        return data;
    }
};
