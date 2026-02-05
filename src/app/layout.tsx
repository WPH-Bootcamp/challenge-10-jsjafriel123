import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Blog App Challenge',
  description: 'Blog Application Challenge - Next.js',
  icons: { icon: '/favicon.png' },
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='id'>
      <body
        className={`${inter.variable} bg-background flex h-auto w-screen flex-col items-center antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
