'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Efeito para mudar a cor quando der scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Ofertas', href: '/ofertas' },
    { name: 'Blog', href: '/blog' },
    { name: 'Sobre', href: '/about' },
    { name: 'Contato', href: '/contato' },
  ];

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-3xl">🐾</span>
            <div className="flex flex-col">
              <span className={`text-2xl font-bold leading-none ${scrolled ? 'text-orange-600' : 'text-white'}`}>
                OpitWeb
              </span>
              <span className={`text-xs font-medium ${scrolled ? 'text-gray-500' : 'text-orange-100'}`}>
                Economia Pet
              </span>
            </div>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-semibold transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-orange-600' : 'text-white hover:text-orange-200'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Botão Entrar/Cadastrar */}
            <Link 
              href="/login" 
              className={`${
                scrolled 
                ? 'bg-orange-600 text-white hover:bg-orange-700' 
                : 'bg-white text-orange-600 hover:bg-orange-50'
              } px-6 py-2.5 rounded-lg font-bold transition-all shadow-lg transform hover:scale-105 active:scale-95`}
            >
              Entrar / Cadastrar
            </Link>
          </div>

          {/* Botão Mobile */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={toggleMenu}
                className="block text-lg font-semibold text-gray-800 hover:text-orange-600 px-2"
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
