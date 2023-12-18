import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './_components/NavBar'
import Footer from './_components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Isar-aerospace frontend',
  description: 'challenge for frontend position',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col md:flex-row md:overflow-hidden">
          <NavBar />
          <section className="w-fit min-h-screen md:p-20 m-auto">
            {children}
          </section>
        </div>
        <Footer />
      </body>
    </html>
  )
}
