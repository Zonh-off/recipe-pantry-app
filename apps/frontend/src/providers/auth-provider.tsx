'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { User, authApi } from '@/features/auth/api/auth';
import { useRouter, usePathname } from 'next/navigation';
import apiClient from '@/shared/lib/api/client';

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    login: (credentials: any) => Promise<void>;
    register: (details: any) => Promise<void>;
    logout: () => Promise<void>;
    checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const router = useRouter();
    const pathname = usePathname();

    const checkAuth = useCallback(async () => {
        try {
            // Try to refresh token first to see if we have a valid session
            const { accessToken: newAccessToken } = await authApi.refresh();
            setAccessToken(newAccessToken);

            // Now get user info
            // We need to make sure the apiClient uses the new token
            // For now, we manually set it or rely on the interceptor we'll add
            const me = await authApi.getMe();
            setUser(me);
        } catch (error) {
            setUser(null);
            setAccessToken(null);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    // Handle token injection into Axios
    useEffect(() => {
        const requestInterceptor = apiClient.interceptors.request.use((config) => {
            if (accessToken) {
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
            return config;
        });

        return () => {
            apiClient.interceptors.request.eject(requestInterceptor);
        };
    }, [accessToken]);

    // Handle token refresh on 401
    useEffect(() => {
        const responseInterceptor = apiClient.interceptors.response.use(
            (response) => response,
            async (error) => {
                const originalRequest = error.config;
                if (error.status === 401 && !originalRequest._retry && !originalRequest.url.includes('/auth/refresh')) {
                    originalRequest._retry = true;
                    try {
                        const { accessToken: newAccessToken } = await authApi.refresh();
                        setAccessToken(newAccessToken);
                        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                        return apiClient(originalRequest);
                    } catch (refreshError) {
                        setUser(null);
                        setAccessToken(null);
                        return Promise.reject(refreshError);
                    }
                }
                return Promise.reject(error);
            }
        );

        return () => {
            apiClient.interceptors.response.eject(responseInterceptor);
        };
    }, []);

    const login = async (credentials: any) => {
        const res = await authApi.login(credentials);
        // Backend returns { accessToken }. We might need to fetch user.
        setAccessToken(res.accessToken);
        const me = await authApi.getMe();
        setUser(me);
        router.push('/pantry');
    };

    const register = async (details: any) => {
        await authApi.register(details);
        // Auto login or redirect to login
        router.push('/login');
    };

    const logout = async () => {
        await authApi.logout();
        setUser(null);
        setAccessToken(null);
        router.push('/login');
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, login, register, logout, checkAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
