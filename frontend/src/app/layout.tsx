import type React from 'react';
import type { Metadata } from 'next';
import './globals.css';


export const metadata: Metadata = {
  title: 'Тестовое ISO-4217',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
