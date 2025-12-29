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
          <span className="text-2xl">🐾</span>
          <span className="font-bold text-xl text-purple-700">Opitweb</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-purple-700">Início</Link>
          <Link href="/about" className="hover:text-purple-700">Sobre</Link>
          <Link href="/blog" className="hover:text-purple-700">Blog</Link>
          <Link href="/contact" className="hover:text-purple-700">Contato</Link>
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
          <Link onClick={() => setOpen(false)} href="/">Início</Link>
          <Link onClick={() => setOpen(false)} href="/about">Sobre</Link>
          <Link onClick={() => setOpen(false)} href="/blog">Blog</Link>
          <Link onClick={() => setOpen(false)} href="/contact">Contato</Link>
        </nav>
      )}
    </header>
  )
}
