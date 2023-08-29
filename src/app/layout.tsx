import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'
import { Providers } from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Andrea 포트폴리오',
  description: '포트폴리오 페이지',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html>
      <body className='bg-primary'>
        <Providers>
          <Header />
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  )
}
