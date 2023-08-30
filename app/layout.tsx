import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'

import Header from '@/components/header'
import { SocialCard } from '@/components/social-card'

import './globals.css'

const font = League_Spartan({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CluedUp',
  description: 'CluedUp - Efficient Study and Productivity Manager'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>
        <Header />
        {children}
        <SocialCard />
      </body>
    </html>
  )
}
