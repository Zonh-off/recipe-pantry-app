import { AxiosError } from 'axios';

/**
 * Extracts a user-friendly error message from an API response.
 * Handles NestJS validation errors, standard Axios errors, and fallbacks.
 */
export const getErrorMessage = (error: any): string => {
    if (error?.message && typeof error.message === 'string' && !error.status) {
        // If it's already a normalized object from our previous interceptor (which we removed)
        // or a simple error object, return it.
        return error.message;
    }

    if (error instanceof AxiosError || (error?.response && error?.config)) {
        const data = error.response?.data;

        // NestJS Validation errors often return an array of messages or a single message
        if (data?.message) {
            if (Array.isArray(data.message)) {
                return data.message[0];
            }
            return data.message;
        }

        // Standard status-based fallbacks if no specific message is provided
        switch (error.response?.status) {
            case 400: return 'Invalid request. Please check your input.';
            case 401: return 'Authentication failed. Please check your credentials.';
            case 403: return 'You do not have permission to perform this action.';
            case 404: return 'The requested resource was not found.';
            case 409: return 'Conflict: This record already exists.';
            case 422: return 'Validation failed. Please correct the errors and try again.';
            case 500: return 'Internal server error. Please try again later.';
        }
    }

    return error?.message || 'An unexpected error occurred.';
};
