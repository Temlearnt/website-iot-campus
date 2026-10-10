import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

// Base URL untuk production (isi dengan domain vercel mu)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://iot-campus-unkris.vercel.app'; // ganti dengan domain asli
const logoUrl = `${siteUrl}/images/logo.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'IoT Campus Krisnadwipayana - Pusat Inovasi IoT & AI',
    template: '%s | IoT Campus Krisnadwipayana',
  },
  description: 'Komunitas riset dan pengembangan Internet of Things (IoT) dan Kecerdasan Buatan (AI) untuk mahasiswa Universitas Krisnadwipayana (UNKRIS). Belajar, berkolaborasi, dan menciptakan proyek nyata bersama 3 dosen pembimbing.',
  keywords: ['IoT Campus Krisnadwipayana', 'IoT UNKRIS', 'AI UNKRIS', 'Riset IoT', 'Komunitas Mahasiswa', 'Internet of Things', 'Artificial Intelligence', 'Inovasi Mahasiswa', 'Universitas Krisnadwipayana'],
  authors: [{ name: 'Tim IoT Campus Krisnadwipayana' }],
  creator: 'IoT Campus Krisnadwipayana',
  publisher: 'Universitas Krisnadwipayana',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'IoT Campus Krisnadwipayana - Pusat Inovasi IoT & AI untuk Mahasiswa UNKRIS',
    description: 'Komunitas mahasiswa UNKRIS yang fokus pada pengembangan IoT dan AI. Bergabung dan wujudkan proyek teknologi masa depan bersama 3 dosen ahli.',
    url: siteUrl,
    siteName: 'IoT Campus Krisnadwipayana',
    images: [
      {
        url: logoUrl,
        width: 512,
        height: 512,
        alt: 'Logo IoT Campus Krisnadwipayana',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IoT Campus Krisnadwipayana - Komunitas IoT & AI UNKRIS',
    description: 'Tempat belajar IoT dan AI untuk mahasiswa UNKRIS. Proyek nyata, riset, dan kolaborasi seru.',
    images: [logoUrl],
    creator: '@iotcampus_unkris', // ganti dengan twitter akun jika ada
  },
  icons: {
    icon: [
      { url: '/images/logo.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/images/logo.png',
    apple: { url: '/images/logo.png', sizes: '180x180', type: 'image/png' },
  },
  manifest: '/site.webmanifest', // jika buat manifest.json
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  themeColor: '#EA580C', // warna primary
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`scroll-smooth ${poppins.variable}`}>
      <head>
        <meta name="google-site-verification" content="..." />
      </head>
      <body className="font-sans antialiased bg-background text-foreground selection:bg-primary/20 selection:text-primary">
        {children}
      </body>
    </html>
  );
}