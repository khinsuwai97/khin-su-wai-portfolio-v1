import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Khin Su Wai - Frontend Developer Portfolio',
  description:
    'I build accessible, pixel-perfect digital experiences for the web.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16' },
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#14b8a6',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <div className="w-full">
          {/* <Navigation /> */}
          {children}
        </div>
      </body>
    </html>
  );
}
