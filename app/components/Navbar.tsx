'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="https://cdttutpzzcsqnpnfsbdv.supabase.co/storage/v1/object/public/Logo/logo.png"
            alt="Opitweb Logo"
            className="w-10 h-10 object-contain"
            onError={(e) => {
              console.error('Erro ao carregar logo');
              e.currentTarget.style.display = 'none';
            }}
          />
          <span className="font-bold text-xl text-purple-700">Opitweb</span>
        </Link>
        {/* Desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-purple-700 transition-colors">Início</Link>
          <Link href="/about" className="hover:text-purple-700 transition-colors">Sobre</Link>
          <Link href="/blog" className="hover:text-purple-700 transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-purple-700 transition-colors">Contato</Link>
        </nav>
        {/* Botão mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden bg-white border-t px-4 py-4 space-y-3">
          <Link href="/" onClick={() => setOpen(false)} className="block">Início</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block">Sobre</Link>
          <Link href="/blog" onClick={() => setOpen(false)} className="block">Blog</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block">Contato</Link>
        </nav>
      )}
    </header>
  )
}
