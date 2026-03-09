'use client';

import { useState } from 'react';
import { useAuth } from '@/providers/auth-provider';
import { AppButton, AppCard, AppCardContent, AppInput } from '@/shared/components/ui';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getErrorMessage } from '@/shared/lib/api/error-utils';
import { UserPlus, ArrowLeft } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const registerSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
    const { register: registerUser } = useAuth();
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (data: RegisterFormValues) => {
        setIsSubmitting(true);
        setError(null);
        try {
            // Remove confirmPassword before sending to backend
            const { confirmPassword, ...registerData } = data;
            await registerUser(registerData);
        } catch (err: any) {
            setError(getErrorMessage(err));
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4">
            <AppCard className="w-full max-w-md border-slate-200 shadow-xl rounded-[2rem] overflow-hidden">
                <div className="bg-green-600 p-8 text-white text-center relative">
                    <Link href="/login" className="absolute left-6 top-8 text-green-100 hover:text-white transition-colors">
                        <ArrowLeft className="h-6 w-6" />
                    </Link>
                    <h1 className="text-3xl font-black tracking-tight mb-2">Join Us!</h1>
                    <p className="text-green-50 opacity-90">Start your journey to zero food waste.</p>
                </div>

                <AppCardContent className="p-8 space-y-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <AppInput
                            label="Full Name"
                            placeholder="John Doe"
                            {...register('name')}
                            error={errors.name?.message}
                        />

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

                        <AppInput
                            label="Confirm Password"
                            type="password"
                            placeholder="••••••••"
                            {...register('confirmPassword')}
                            error={errors.confirmPassword?.message}
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
                            <UserPlus className="h-5 w-5 mr-2" />
                            Create Account
                        </AppButton>
                    </form>

                    <p className="text-center text-sm text-slate-500 font-medium">
                        Already have an account?{' '}
                        <Link href="/login" className="text-green-600 font-bold hover:underline">
                            Sign In
                        </Link>
                    </p>
                </AppCardContent>
            </AppCard>
        </div>
    );
}
