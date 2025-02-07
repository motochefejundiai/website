'use client'

import { useState } from 'react'
import { whatsapp } from '@/constants/links'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const menus = [
  { id: 'home-menu', label: 'Página Inicial', href: '/' },
  { id: 'about-menu', label: 'Sobre Nós', href: '/#sobre' },
  { id: 'motorcycles-menu', label: 'Motos', href: '/#modelos' },
  { id: 'contact-menu', label: 'Contato', href: '/#contato' }
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[60] animate-in animate-out">
        <Link href={whatsapp.main} target="_blank">
          <div className="bg-[#25D366] p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Image
              width={40}
              height={40}
              src="/whatsapp.webp"
              alt="Fale no WhatsApp"
              className="transition-transform transform hover:scale-110"
            />
          </div>
        </Link>
      </div>
      <header className="w-full bg-foreground">
        <div className="max-w-screen-2xl mx-auto px-6 py-2 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              width={80}
              height={80}
              src="/logo-white.png"
              alt="Logo MotoChefe Jundiaí"
              className="transition-transform transform hover:scale-105"
            />
          </Link>
          <nav className="hidden md:flex space-x-8">
            {menus.map(({ id, label, href }) => (
              <Link
                key={id}
                href={href}
                className="text-[#B5B5B5] uppercase font-bold text-sm tracking-wider relative group transition-all duration-300"
              >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
          <Link
            target="_blank"
            className="hidden md:flex text-white text-lg items-center px-6 py-3 rounded-full bg-[#25D366] transition-all duration-300 hover:scale-105 shadow-lg hover:bg-[#25D366]/90"
            href={whatsapp.main}
          >
            <Image height={30} width={30} alt="WhatsApp" src="/whatsapp.webp" />
            <span className="ml-2">Compre Agora</span>
          </Link>
          <button
            className="md:hidden text-[#B5B5B5] p-2 rounded-lg focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={32} className="transition-transform transform rotate-180" />
            ) : (
              <Menu size={32} className="transition-transform transform" />
            )}
          </button>
        </div>
      </header>
      {isOpen && (
        <div
          className="md:hidden fixed top-0 left-0 w-full h-screen bg-[#202020]/95 backdrop-blur-sm flex items-center justify-center z-[60]"
          onClick={() => setIsOpen(false)}
        >
          <nav
            className="flex flex-col items-center justify-center space-y-8"
            onClick={e => e.stopPropagation()}
          >
            {menus.map(({ id, label, href }) => (
              <Link
                key={id}
                href={href}
                className="text-[#B5B5B5] text-2xl uppercase font-bold tracking-wider hover:text-primary transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              target="_blank"
              className="text-white text-xl flex gap-2 items-center p-4 rounded-lg bg-[#25D366] hover:scale-105 transition-all duration-300 hover:bg-[#25D366]/90"
              href={whatsapp.main}
            >
              <Image height={30} width={30} alt="WhatsApp" src="/whatsapp.webp" />
              Compre Agora
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}

export default Header
