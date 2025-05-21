export const dynamic = "force-dynamic";
import PricingCalculatorClient from '@/components/PricingCalculatorClient';
import { Suspense } from 'react';

export const metadata = {
  title: 'Structured Settlement Calculator | Smarter Payouts',
  description: 'Calculate your structured settlement payout options with our easy-to-use calculator. Get instant estimates for lump sum, guaranteed, and life contingent payments.',
  keywords: 'structured settlement calculator, lump sum calculator, settlement payout, guaranteed payments, life contingent payments',
  openGraph: {
    title: 'Structured Settlement Calculator | Smarter Payouts',
    description: 'Calculate your structured settlement payout options with our easy-to-use calculator. Get instant estimates for lump sum, guaranteed, and life contingent payments.',
    url: 'https://smarterpayouts.com/pricingcalculator',
    siteName: 'Smarter Payouts',
    images: [
      {
        url: 'https://smarterpayouts.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Smarter Payouts Calculator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Structured Settlement Calculator | Smarter Payouts',
    description: 'Calculate your structured settlement payout options with our easy-to-use calculator.',
    images: ['https://smarterpayouts.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://smarterpayouts.com/pricingcalculator',
  },
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PricingCalculatorClient />
    </Suspense>
  );
} 