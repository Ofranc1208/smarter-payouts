import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  metadataBase: new URL('https://smarterpayouts.com'),
  title: {
    default: 'Smarter Payouts | Structured Settlement Calculator',
    template: '%s | Smarter Payouts'
  },
  description: 'Calculate your structured settlement payout options with our easy-to-use calculator. Get instant estimates for lump sum, guaranteed, and life contingent payments.',
  keywords: ['structured settlement', 'calculator', 'lump sum', 'guaranteed payments', 'life contingent payments'],
  authors: [{ name: 'Smarter Payouts' }],
  creator: 'Smarter Payouts',
  publisher: 'Smarter Payouts',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://smarterpayouts.com',
    siteName: 'Smarter Payouts',
    title: 'Smarter Payouts | Structured Settlement Calculator',
    description: 'Calculate your structured settlement payout options with our easy-to-use calculator.',
    images: [
      {
        url: 'https://smarterpayouts.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Smarter Payouts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smarter Payouts | Structured Settlement Calculator',
    description: 'Calculate your structured settlement payout options with our easy-to-use calculator.',
    images: ['https://smarterpayouts.com/og-image.jpg'],
    creator: '@smarterpayouts',
  },
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
  verification: {
    google: 'your-google-site-verification',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
} 