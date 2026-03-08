'use client';

import AppShell from '@/shared/components/layout/AppShell';

/**
 * PublicLayout – provides the standard AppShell for public pages
 * without any authentication redirection.
 */
export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <AppShell>{children}</AppShell>;
}
