import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'user@example.com' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;
                try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/v1'}/auth/login`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email: credentials.email, password: credentials.password }),
                    });
                    const user = await res.json();
                    if (res.ok && user) {
                        return {
                            id: user.id || 'resolved-by-backend', // NextAuth requires an ID
                            accessToken: user.accessToken,
                            email: credentials.email,
                        };
                    }
                    return null;
                } catch (error) {
                    console.error(error);
                    return null;
                }
            },
        }),
    ],
    session: { strategy: 'jwt' as const },
    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
                token.accessToken = user.accessToken;
            }
            return token;
        },
        async session({ session, token }: any) {
            session.accessToken = token.accessToken as string;
            return session;
        },
    },
    pages: {
        // custom pages later...
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
