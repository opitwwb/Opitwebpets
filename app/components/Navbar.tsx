'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: 'Início', href: '/' },
    { name: 'Ofertas', href: '/ofertas' },
    { name: 'Blog', href: '/blog' },
    { name: 'Sobre', href: '/about' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-3xl">🐾</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
              Opitweb
            </span>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-orange-600 font-semibold transition-colors"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Botão Entrar/Cadastrar Laranja */}
            <Link 
              href="/login" 
              className="bg-orange-600 text-white px-5 py-2 rounded-lg font-bold hover:bg-orange-700 transition-all shadow-md transform hover:scale-105 active:scale-95"
            >
              Entrar / Cadastrar
            </Link>
          </div>

          {/* Botão Mobile (Hambúrguer) */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={toggleMenu}
                className="block text-lg font-semibold text-gray-700 hover:text-orange-600 px-2"
              >
                {item.name}
              </Link>
            ))}
            <hr className="border-gray-100" />
            <Link 
              href="/login" 
              onClick={toggleMenu}
              className="block w-full text-center bg-orange-600 text-white px-4 py-3 rounded-xl font-bold shadow-lg"
            >
              Entrar / Cadastrar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
