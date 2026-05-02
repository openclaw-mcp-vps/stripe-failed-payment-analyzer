import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Failed Payment Analyzer — Diagnose Why Payments Fail',
  description: 'AI-powered analysis of Stripe payment failures. Identify patterns, get actionable fixes, and reduce churn for your SaaS or e-commerce store.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ead21a65-c998-4a16-9df1-f5568a56adf8"></script>
      </head>
      <body style={{ backgroundColor: '#0d1117', color: '#c9d1d9', fontFamily: 'system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
