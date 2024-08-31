import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

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

      </body>
    </html>
  )
}