import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Providers } from './providers'

const rubik = localFont({
  src: '../public/font/Rubik-VariableFont_wght.ttf',
  variable: '--font-rubik',
  display: 'swap',
  weight: '300 900',
})

export const metadata: Metadata = {
  title: 'HelloRates Contractor Financing | Credit Declines Recovered. Dealer Fees Eliminated.',
  description:
    'HelloRates is the most comprehensive contractor financing program in the market. Recover credit declines, fund the gap on partial approvals, and eliminate 5–15% dealer fees. 35+ lenders. 500 FICO. Flat $67/mo.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${rubik.variable} ${rubik.className}`}>
      <body className="antialiased">
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
