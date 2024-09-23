import Image from 'next/image'
import Link from 'next/link'
import { socialMedia } from '@/data/socialMedia'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-sm">
            © {new Date().getFullYear()} webdevindo. All rights reserved.
          </div>
          <nav className="flex items-center space-x-4">
            {socialMedia.map((social) => (
              <Link key={social.name} href={social.url} aria-label={social.name}>
                <div className="relative w-10 h-10 bg-gray-800 rounded-full overflow-hidden transition-colors hover:bg-primary">
                  <Image
                    src={social.src}
                    alt={social.name}
                    fill
                    className="p-2 object-contain"
                  />
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}