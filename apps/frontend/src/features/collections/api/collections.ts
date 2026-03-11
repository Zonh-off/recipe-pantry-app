import apiClient from '@/shared/lib/api/client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export interface Collection {
    id: string;
    name: string;
    recipeCount: number;
    recipeIds: number[];
    thumbnails: string[];
    recipes?: any[]; // Full recipe objects if requested
}

export interface CreateCollectionDto {
    name: string;
}

export interface UpdateCollectionDto {
    name: string;
}

/* ─── API Methods ─────────────────────────────────────────── */

export const collectionsApi = {
    getCollections: async (): Promise<Collection[]> => {
        const { data } = await apiClient.get('/collections');
        return data.map((c: any) => ({
            ...c,
            recipeCount: c.recipeIds?.length || 0,
            recipeIds: c.recipeIds || [],
            thumbnails: (c.recipeIds || []).slice(0, 3).map((id: number) => `https://spoonacular.com/recipeImages/${id}-312x231.jpg`)
        }));
    },

    getCollectionDetails: async (id: string): Promise<Collection> => {
        const { data } = await apiClient.get(`/collections/${id}`);
        return {
            ...data,
            recipeCount: data.recipeIds?.length || 0,
            recipeIds: data.recipeIds || [],
            thumbnails: (data.recipeIds || []).slice(0, 3).map((id: number) => `https://spoonacular.com/recipeImages/${id}-312x231.jpg`)
        };
    },

    createCollection: async (dto: CreateCollectionDto): Promise<Collection> => {
        const { data } = await apiClient.post('/collections', dto);
        return {
            ...data,
            recipeCount: data.recipeIds?.length || 0,
            recipeIds: data.recipeIds || [],
            thumbnails: (data.recipeIds || []).slice(0, 3).map((id: number) => `https://spoonacular.com/recipeImages/${id}-312x231.jpg`)
        };
    },

    addRecipeToCollection: async (collectionId: string, recipeId: string | number): Promise<void> => {
        await apiClient.post(`/collections/${collectionId}/recipes/${recipeId}`);
    },

    removeCollection: async (id: string): Promise<void> => {
        await apiClient.delete(`/collections/${id}`);
    },

    updateCollection: async (id: string, dto: UpdateCollectionDto): Promise<Collection> => {
        const { data } = await apiClient.patch(`/collections/${id}`, dto);
        return {
            ...data,
            recipeCount: data.recipeIds?.length || 0,
            recipeIds: data.recipeIds || [],
            thumbnails: (data.recipeIds || []).slice(0, 3).map((recipeId: number) => `https://spoonacular.com/recipeImages/${recipeId}-312x231.jpg`)
        };
    },
};

/* ─── React Query Hooks ───────────────────────────────────── */

export const useCollections = () => {
    return useQuery({
        queryKey: ['collections'],
        queryFn: collectionsApi.getCollections,
    });
};

export const useCollectionDetails = (id: string) => {
    return useQuery({
        queryKey: ['collections', 'details', id],
        queryFn: () => collectionsApi.getCollectionDetails(id),
        enabled: !!id,
    });
};

export const useCreateCollection = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: collectionsApi.createCollection,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['collections'] });
        },
    });
};

export const useAddRecipeToCollection = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ collectionId, recipeId }: { collectionId: string, recipeId: string | number }) =>
            collectionsApi.addRecipeToCollection(collectionId, recipeId),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['collections'] });
            queryClient.invalidateQueries({ queryKey: ['collections', 'details', variables.collectionId] });
        },
    });
};

export const useRemoveCollection = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: collectionsApi.removeCollection,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['collections'] });
        },
    });
};

export const useUpdateCollection = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, name }: { id: string } & UpdateCollectionDto) => collectionsApi.updateCollection(id, { name }),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['collections'] });
            queryClient.invalidateQueries({ queryKey: ['collections', 'details', variables.id] });
        },
    });
};
