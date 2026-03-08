'use client';

import { useState } from 'react';
import { useAuth } from '@/providers/auth-provider';
import { PageContainer, AppButton, AppCard, AppCardContent, AppInput } from '@/shared/components/ui';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { LogIn, UserPlus } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
    const { login } = useAuth();
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormValues) => {
        setIsSubmitting(true);
        setError(null);
        try {
            await login(data);
        } catch (err: any) {
            setError(err.message || 'Failed to login. Please check your credentials.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4">
            <AppCard className="w-full max-w-md border-slate-200 shadow-xl rounded-[2rem] overflow-hidden">
                <div className="bg-green-600 p-8 text-white text-center">
                    <h1 className="text-3xl font-black tracking-tight mb-2">Welcome Back!</h1>
                    <p className="text-green-50 opacity-90">Login to access your personalized pantry.</p>
                </div>

                <AppCardContent className="p-8 space-y-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <AppInput
                            label="Email Address"
                            placeholder="you@example.com"
                            {...register('email')}
                            error={errors.email?.message}
                        />

                        <AppInput
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            {...register('password')}
                            error={errors.password?.message}
                        />

                        {error && (
                            <div className="p-3 rounded-xl bg-rose-50 border border-rose-100 text-rose-600 text-sm font-medium">
                                {error}
                            </div>
                        )}

                        <AppButton
                            type="submit"
                            className="w-full h-12 text-base shadow-lg shadow-green-600/20 mt-2"
                            loading={isSubmitting}
                        >
                            <LogIn className="h-5 w-5 mr-2" />
                            Sign In
                        </AppButton>
                    </form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-100"></span></div>
                        <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-slate-400 font-bold tracking-widest">New here?</span></div>
                    </div>

                    <Link href="/register">
                        <AppButton variant="outline" className="w-full h-12 border-slate-200 text-slate-600 hover:bg-slate-50 mt-2">
                            <UserPlus className="h-5 w-5 mr-2" />
                            Create an Account
                        </AppButton>
                    </Link>
                </AppCardContent>
            </AppCard>
        </div>
    );
}
