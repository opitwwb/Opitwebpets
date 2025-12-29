'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center space-x-2">
            <span className="text-2xl">🐾</span>
            <span className="font-bold text-xl text-purple-700">Opitweb</span>
          </a>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/"><a className="hover:text-purple-700 transition-colors">Início</a></Link>
          <Link href="/about"><a className="hover:text-purple-700 transition-colors">Sobre</a></Link>
          <Link href="/blog"><a className="hover:text-purple-700 transition-colors">Blog</a></Link>
          <Link href="/contact"><a className="hover:text-purple-700 transition-colors">Contato</a></Link>
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
          <Link href="/"><a onClick={() => setOpen(false)}>Início</a></Link>
          <Link href="/about"><a onClick={() => setOpen(false)}>Sobre</a></Link>
          <Link href="/blog"><a onClick={() => setOpen(false)}>Blog</a></Link>
          <Link href="/contact"><a onClick={() => setOpen(false)}>Contato</a></Link>
        </nav>
      )}
    </header>
  )
}
