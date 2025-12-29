'use client'

import React, { useState, useEffect } from 'react';
import { 
  Mail, Star, CheckCircle, Tag, TrendingDown, Bell, Heart, 
  ChevronRight, Users, Sparkles, Search, MapPin, Phone, Clock, Menu, X 
} from 'lucide-react';

export default function OpitWebHomePage() {
  const [email, setEmail] = useState('');
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
      {/* NAVBAR INTEGRADA (Para evitar erro de módulo não encontrado) */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center text-xl">🐾</div>
            <span className={`text-2xl font-black ${isScrolled ? 'text-gray-900' : 'text-white'}`}>OpitWeb</span>
          </div>
          <div className={`hidden md:flex gap-8 font-bold ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
            <a href="#" className="hover:text-orange-500 transition">Início</a>
            <a href="#" className="hover:text-orange-500 transition">Ofertas</a>
            <a href="#" className="hover:text-orange-500 transition">Blog</a>
            <a href="#" className="hover:text-orange-500 transition">Contato</a>
          </div>
          <button className="bg-orange-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-orange-700 transition">
            Entrar
          </button>
        </div>
      </nav>

      {/* Botão Flutuante */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${showFloatingCTA ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 bg-orange-600 text-white px-6 py-4 rounded-full shadow-2xl hover:scale-105 transition-all"
        >
          <Bell className="w-5 h-5 animate-pulse" />
          <span className="font-bold">Avisar-me de Promoções</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 to-amber-500 text-white py-32 pt-40">
        <div className={`max-w-7xl mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4" />
              Rastreador de Preços Grátis
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Economize <span className="text-yellow-200">Muito Dinheiro</span> em Produtos Pet!
            </h1>
            <p className="text-xl text-orange-50 mb-10">
              Não pague caro nunca mais. Receba alertas automáticos quando os preços da Amazon baixarem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-orange-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all shadow-xl">
                Começar a Economizar
              </button>
              <button className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                Ver Ofertas Atuais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Ofertas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">🔥 Ofertas em Destaque</h2>
            <p className="text-gray-600">Preços atualizados em tempo real para o seu pet.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-xl mb-4" />
                <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full uppercase">{product.category}</span>
                <h3 className="text-lg font-bold mt-3 text-gray-900">{product.name}</h3>
                <div className="text-2xl font-black text-orange-600 my-4">{product.price}</div>
                <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700 transition-all">
                  Ver Detalhes
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white">🐾</div>
            <span className="text-2xl font-black text-white">OpitWeb</span>
          </div>
          <div className="flex justify-center gap-8 mb-8 text-sm font-bold">
            <a href="#" className="hover:text-white transition">Privacidade</a>
            <a href="#" className="hover:text-white transition">Termos</a>
            <a href="#" className="hover:text-white transition">Contato</a>
          </div>
          <p className="text-xs border-t border-gray-800 pt-8">
            © 2024 OpitWeb. Economia inteligente para quem ama pets.
          </p>
        </div>
      </footer>
    </main>
  );
}
