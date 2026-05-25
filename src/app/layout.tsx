import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'IoT Campus Krisnadwipayana - Pusat Inovasi Teknologi',
  description: 'Komunitas Riset IoT dan AI di Universitas Krisnadwipayana. Mengembangkan solusi cerdas untuk masa depan melalui teknologi terhubung.',
  keywords: ['IoT Campus Krisnadwipayana', 'IoT UNKRIS', 'Riset AI UNKRIS', 'Teknik Universitas Krisnadwipayana', 'Laboratorium IoT', 'Inovasi Mahasiswa'],
  authors: [{ name: 'IoT Campus Krisnadwipayana Team' }],
  robots: 'index, follow',
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

// Viewport dipisah dari metadata (Next.js 15+)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}