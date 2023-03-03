import './globals.css'
// pages/_app.js
import { Roboto } from 'next/font/google'
// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

import MainNavigation from '../components/MainNavigation/MainNavigation'
import SlimNavigation from '../components/NavigationSlim/NavigationSlim'
import FooterSlim from '../components/Footers/FooterSlim/FooterSlim'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header>
          <SlimNavigation />
          <MainNavigation />
        </header>
        <main>{children}</main>
        <FooterSlim />
      </body>
    </html>
  )
}
