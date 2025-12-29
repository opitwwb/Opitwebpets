'use client'

import React, { useState, useEffect } from 'react';
// Importamos apenas o que o código realmente usa para evitar erros de compilação
import { 
  Bell, Sparkles, ShoppingCart, 
  Search, Mail, MapPin, Phone 
} from 'lucide-react';

export default function OpitWebHomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > 800);
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredProducts = [
    { name: "Bravecto® - Antipulgas", price: "R$ 131,44", image: "https://placehold.co/400x400/f97316/white?text=Bravecto", category: "Medicamentos" },
    { name: "Tapete Higiênico Premium", price: "R$ 52,78", image: "https://placehold.co/400x400/fb923c/white?text=Tapete", category: "Higiene" },
    { name: "Golden Gourmet Gatos", price: "R$ 2,69", image: "https://placehold.co/400x400/fdba74/white?text=Ração", category: "Alimentação" },
    { name: "NexGard Antipulgas", price: "R$ 64,72", image: "https://placehold.co/400x400/fed7aa/white?text=NexGard", category: "Medicamentos" }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* NAVBAR UNIFICADA - Sem imports externos para não dar erro no Vercel */}
      <nav className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-xl text-white">🐾</div>
            <span className={`text-2xl font-black ${isScrolled ? 'text-gray-900' : 'text-white'}`}>OpitWeb</span>
          </div>
          <div className={`hidden md:flex gap-8 font-bold ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
            <a href="#" className="hover:text-orange-500 transition">Início</a>
            <a href="#" className="hover:text-orange-500 transition">Ofertas</a>
            <a href="#" className="hover:text-orange-500 transition">Blog</a>
            <a href="#" className="hover:text-orange-500 transition">Contato</a>
          </div>
          <button className="bg-orange-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-orange-700 transition shadow-lg">
            Entrar
          </button>
        </div>
      </nav>

      {/* Hero Section - Padding pt-48 para evitar que o texto suba demais */}
      <section className="relative bg-gradient-to-br from-orange-600 to-amber-500 text-white pt-48 pb-32 overflow-hidden">
        <div className={`max-w-7xl mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4" />
              Rastreador de Preços Grátis para Produtos Pet
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Economize <span className="text-yellow-200">Muito Dinheiro</span> em Produtos Pet!
            </h1>
            <p className="text-xl text-orange-50 mb-10 max-w-2xl">
              Não pague caro nunca mais. Receba alertas automáticos quando os preços da Amazon baixarem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-orange-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all shadow-xl flex items-center justify-center gap-2">
                Começar a Economizar
              </button>
              <button className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                Ver Ofertas Atuais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Ofertas */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">🔥 Ofertas em Destaque</h2>
            <p className="text-gray-600">Preços atualizados em tempo real para o seu pet.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover group-hover:scale-110 transition-duration-500" />
                  <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">Oferta</div>
                </div>
                <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full uppercase tracking-wider">{product.category}</span>
                <h3 className="text-lg font-bold mt-3 text-gray-900 leading-snug">{product.name}</h3>
                <div className="text-2xl font-black text-orange-600 my-4">{product.price}</div>
                <button className="w-full bg-orange-600 text-white py-3 rounded-xl font-bold hover:bg-orange-700 transition-all flex items-center justify-center gap-2">
                  <ShoppingCart className="w-4 h-4" /> Ver na Amazon
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white">🐾</div>
            <span className="text-3xl font-black text-white tracking-tighter">OpitWeb</span>
          </div>
          <p className="max-w-md mx-auto mb-8">A plataforma número #1 para economia em produtos pet no Brasil.</p>
          <p className="text-xs border-t border-gray-800 pt-8 opacity-50">
            © 2024 OpitWeb. Economia inteligente para quem ama pets.
          </p>
        </div>
      </footer>
    </main>
  );
}
