export const dynamic = "force-dynamic";
import LumpSumCalculatorClient from '@/components/LumpSumCalculatorClient';
import { Suspense } from 'react';

export const metadata = {
  title: 'Lump Sum Calculator | Smarter Payouts',
  description: 'Calculate your lump sum settlement payout with our easy-to-use calculator. Get instant estimates for your structured settlement.',
  keywords: 'lump sum calculator, settlement payout, structured settlement, cash payout',
  openGraph: {
    title: 'Lump Sum Calculator | Smarter Payouts',
    description: 'Calculate your lump sum settlement payout with our easy-to-use calculator. Get instant estimates for your structured settlement.',
    url: 'https://smarterpayouts.com/lump-sum-calculator',
    siteName: 'Smarter Payouts',
    images: [
      {
        url: 'https://smarterpayouts.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Smarter Payouts Lump Sum Calculator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lump Sum Calculator | Smarter Payouts',
    description: 'Calculate your lump sum settlement payout with our easy-to-use calculator.',
    images: ['https://smarterpayouts.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://smarterpayouts.com/lump-sum-calculator',
  },
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LumpSumCalculatorClient />
    </Suspense>
  );
} 