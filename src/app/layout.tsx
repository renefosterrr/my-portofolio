import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yogi Ananda Brata | IT Engineering Team Lead',
  description: 'Portfolio of an IT Engineering Team Lead specializing in network engineering, infrastructure, and cybersecurity.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
