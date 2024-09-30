import type { ReactNode } from 'react';
import { inter } from './ui/fonts';
import '@/app/ui/global.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
