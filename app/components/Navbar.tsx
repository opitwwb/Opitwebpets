'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-amber-500 rounded-xl flex items-center justify-center transform transition-transform group-hover:scale-110">
              <span className="text-white font-black text-2xl">O</span>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
          </div>
          <div>
            <span className="font-black text-2xl bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
              Opitweb
            </span>
            <p className="text-xs text-gray-500 -mt-1">Economize nas compras pet</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
            Início
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
            Sobre
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
            Blog
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">
            Contato
          </Link>
          <button className="bg-gradient-to-r from-orange-600 to-amber-500 text-white px-6 py-2 rounded-lg font-bold hover:shadow-lg transition-all">
            Cadastre-se Grátis
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 focus:outline-none"
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 bg-gray-700 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-700 transition-all ${open ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-700 transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <nav className="bg-white border-t px-4 py-4 space-y-4">
          <Link 
            href="/" 
            onClick={() => setOpen(false)} 
            className="block py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors"
          >
            Início
          </Link>
          <Link 
            href="/about" 
            onClick={() => setOpen(false)} 
            className="block py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors"
          >
            Sobre
          </Link>
          <Link 
            href="/blog" 
            onClick={() => setOpen(false)} 
            className="block py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors"
          >
            Blog
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setOpen(false)} 
            className="block py-2 text-gray-700 hover:text-orange-600 font-medium transition-colors"
          >
            Contato
          </Link>
          <button className="w-full bg-gradient-to-r from-orange-600 to-amber-500 text-white px-6 py-3 rounded-lg font-bold">
            Cadastre-se Grátis
          </button>
        </nav>
      </div>
    </header>
  )
}
