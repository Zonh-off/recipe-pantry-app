'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export default function QueryProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60_000,
                        retry: (failureCount, error: unknown) => {
                            // Do not retry on 4xx client errors
                            if (
                                error &&
                                typeof error === 'object' &&
                                'status' in error &&
                                typeof (error as { status: number }).status === 'number' &&
                                (error as { status: number }).status >= 400 &&
                                (error as { status: number }).status < 500
                            ) {
                                return false;
                            }
                            return failureCount < 2;
                        },
                    },
                },
            })
    );

    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
}
