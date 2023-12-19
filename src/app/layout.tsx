import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './_components_layout/NavBar'
import Footer from './_components_layout/Footer'
import SideBar from './_components_layout/SideBar'

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
      <body className={`${inter.className} dark:bg-gray-900`}>
        <div className="flex md:flex-row md:overflow-hidden">
          <NavBar />
          <SideBar />
          <section className="w-full min-h-screen md:p-20 m-auto">
            {children}
          </section>
        </div>
        <Footer />
      </body>
    </html>
  )
}
