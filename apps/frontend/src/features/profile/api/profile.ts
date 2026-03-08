import apiClient from '@/shared/lib/api/client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export interface UserProfile {
    diet?: string;
    intolerances: string[];
    cuisines: string[];
    goals: {
        calories?: string;
        protein?: string;
        carbs?: string;
        fat?: string;
    };
}

/* ─── API Methods ─────────────────────────────────────────── */

export const profileApi = {
    getProfile: async (): Promise<UserProfile> => {
        const { data } = await apiClient.get('/profile');
        return data;
    },

    updateProfile: async (profile: UserProfile): Promise<UserProfile> => {
        const { data } = await apiClient.patch('/profile', profile);
        return data;
    },
};

/* ─── React Query Hooks ───────────────────────────────────── */

export const useProfile = () => {
    return useQuery({
        queryKey: ['profile'],
        queryFn: profileApi.getProfile,
    });
};

export const useUpdateProfile = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: profileApi.updateProfile,
        onSuccess: (data) => {
            queryClient.setQueryData(['profile'], data);
        },
    });
};
