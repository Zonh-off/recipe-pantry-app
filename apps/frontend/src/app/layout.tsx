import type { Metadata } from 'next';
import './globals.css';
import QueryProvider from '@/providers/query-provider';
import { AuthProvider } from '@/providers/auth-provider';

export const metadata: Metadata = {
  title: {
    default: 'RecipePantry – Cook What You Have',
    template: '%s | RecipePantry',
  },
  description:
    'Manage your pantry, discover recipes from your ingredients, and build grocery lists effortlessly.',
  keywords: ['recipes', 'pantry', 'grocery list', 'meal planning', 'cook from pantry'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <QueryProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
