import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-rubik',
});
// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ['300', '400', '500', '600', '700', '800', '900'],
//   variable: '--font-poppins',
// });

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
  themeColor: '#14b8a6',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${rubik.variable} ${rubik.className} antialiased`}>
        <div className="w-full">
          {/* <Navigation /> */}
          {children}
        </div>
      </body>
    </html>
  );
}
