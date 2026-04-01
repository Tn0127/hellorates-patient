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
  title: 'HelloRates Patient Financing | More Patients Approved. More Treatment Plans Accepted.',
  description:
    'HelloRates Patient Financing Solutions gives medical, dental, chiro, med spa and wellness practices access to 35+ lenders, approvals down to 500 FICO, and zero merchant financing fees. More patients approved. More treatment plans accepted.',
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
