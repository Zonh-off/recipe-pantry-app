import { z } from 'zod';

export const envSchema = z.object({
    NEXTAUTH_SECRET: z.string().min(32),
    NEXTAUTH_URL: z.string().url(),
    BACKEND_API_URL: z.string().url(),
    NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

export const env = envSchema.parse({
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    BACKEND_API_URL: process.env.BACKEND_API_URL,
    NODE_ENV: process.env.NODE_ENV,
});
