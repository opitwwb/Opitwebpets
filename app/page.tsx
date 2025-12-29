'use client'

import React, { useState, useEffect } from 'react';
import { 
  Bell, Sparkles, ShoppingCart, 
  Search, Mail, MapPin, Phone 
} from 'lucide-react';

export default function OpitWebHomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
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
      {/* NAVBAR PROFISSIONAL INTEGRADA */}
      <nav className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-xl text-white font-bold shadow-lg">🐾</div>
            <span className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-gray-900' : 'text-white'}`}>OpitWeb</span>
          </div>
          
          <div className={`hidden md:flex gap-8 font-bold ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
            <a href="#" className="hover:text-orange-500 transition">Início</a>
            <a href="#" className="hover:text-orange-500 transition">Ofertas</a>
            <a href="#" className="hover:text-orange-500 transition">Blog</a>
            <a href="#" className="hover:text-orange-500 transition">Contato</a>
          </div>

          <button className="bg-orange-600 text-white px-8 py-2.5 rounded-full font-bold hover:bg-orange-700 transition shadow-lg active:scale-95">
            Entrar
          </button>
        </div>
      </nav>

      {/* HERO SECTION - Ajustado para não bater no menu */}
      <section className="relative bg-gradient-to-br from-orange-600 to-amber-500 text-white pt-52 pb-32 overflow-hidden">
        <div className={`max-w-7xl mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-bold mb-8">
              <Sparkles className="w-4 h-4" />
              Rastreador de Preços Grátis para Produtos Pet
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
              Economize <span className="text-yellow-200">Muito Dinheiro</span> em Produtos Pet!
            </h1>
            <p className="text-xl md:text-2xl text-orange-50 mb-12 max-w-2xl leading-relaxed font-medium">
              Não pague caro nunca mais. Receba alertas automáticos quando os preços da Amazon baixarem.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-white text-orange-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-orange-50 transition-all shadow-2xl flex items-center justify-center">
                Começar a Economizar
              </button>
              <button className="border-2 border-white/40 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center">
                Ver Ofertas Atuais
              </button>
            </div>
          </div>
        </div>
        
        {/* Detalhe decorativo no fundo */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl"></div>
      </section>

      {/* SEÇÃO DE OFERTAS */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="text-left">
              <h2 className="text-4xl font-black text-gray-900 mb-4 flex items-center gap-3">
                <span className="text-4xl">🔥</span> Ofertas em Destaque
              </h2>
              <p className="text-gray-600 text-lg">Preços reais atualizados para facilitar sua compra.</p>
            </div>
            <button className="text-orange-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Ver todas as ofertas →
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, i) => (
              <div key={i} className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
                <div className="relative overflow-hidden rounded-2xl mb-6 h-48 bg-gray-100">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                  <div className="absolute top-3 right-3 bg-orange-600 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg tracking-widest uppercase">Oferta</div>
                </div>
                <span className="text-xs font-black text-orange-600 bg-orange-50 px-3 py-1.5 rounded-full uppercase tracking-widest">{product.category}</span>
                <h3 className="text-xl font-bold mt-4 text-gray-900 leading-tight h-14 overflow-hidden">{product.name}</h3>
                <div className="text-3xl font-black text-orange-600 my-5">{product.price}</div>
                <button className="w-full bg-orange-600 text-white py-4 rounded-xl font-bold hover:bg-orange-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-600/20">
                  <ShoppingCart className="w-5 h-5" /> Ver Detalhes
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
            <div>
              <div className="flex justify-center md:justify-start items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-white text-xl">🐾</div>
                <span className="text-3xl font-black text-white tracking-tighter">OpitWeb</span>
              </div>
              <p className="max-w-xs text-lg">A plataforma número #1 para economia em produtos pet no Brasil.</p>
            </div>
            
            <div className="flex gap-12 font-bold text-white">
              <div className="flex flex-col gap-4">
                <a href="#" className="hover:text-orange-500">Privacidade</a>
                <a href="#" className="hover:text-orange-500">Termos</a>
              </div>
              <div className="flex flex-col gap-4">
                <a href="#" className="hover:text-orange-500">Sobre</a>
                <a href="#" className="hover:text-orange-500">Contato</a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm opacity-40">
            © 2024 OpitWeb. Economia inteligente para quem ama pets.
          </div>
        </div>
      </footer>
    </main>
  );
}
