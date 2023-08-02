import './globals.scss'
import '@/styles/reset.css'
import '@/styles/normalize.css'
import '@/styles/variables.scss'
import 'swiper/scss'
import type { Metadata } from 'next'
import { Unbounded } from 'next/font/google'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'

const unbounded = Unbounded({ subsets: ['cyrillic-ext'] })

export const metadata: Metadata = {
  title: 'Системотехника',
  description: 'Организация по производству 3D декалей',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={unbounded.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
