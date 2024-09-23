import Navbar from '@/app/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/app/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Slicing Webdevindo',
  description: 'Belajar Slicing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>

        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  )
}