import './globals.css'
// pages/_app.js
import { Inter } from 'next/font/google'
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

import MainNavigation from '../components/MainNavigation/MainNavigation'
import SlimNavigation from '../components/SlimNavigation/SlimNavigation'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <SlimNavigation />
          <MainNavigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
