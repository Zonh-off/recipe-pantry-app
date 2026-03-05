import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recipe Pantry App | Smart Pantry Management",
  description: "Cook what you have, waste nothing. Manage your pantry and find perfect recipes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-surface">
          <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 h-20 flex items-center px-8 justify-between backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                <span className="text-surface font-black text-xl">R</span>
              </div>
              <h1 className="text-2xl font-black tracking-tight text-foreground">
                Recipe<span className="text-primary">Pantry</span>
              </h1>
            </div>
            <div className="flex gap-8 items-center">
              <a href="#" className="nav-link">Pantry</a>
              <a href="#" className="nav-link text-primary font-bold">Recipes</a>
              <a href="#" className="nav-link">Collections</a>
              <a href="#" className="btn-secondary px-5 py-2.5 text-sm">Sign In</a>
            </div>
          </nav>
          <main className="pt-24 pb-20">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
