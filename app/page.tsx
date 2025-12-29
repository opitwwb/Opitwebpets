'use client'

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar'; 
import { 
  Mail, Star, CheckCircle, Tag, TrendingDown, Bell, Heart, 
  ChevronRight, Users, Sparkles, Search, MapPin, Phone, Clock 
} from 'lucide-react';

export default function OpitWebHomePage() {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuredProducts = [
    { name: "Bravecto® - Antipulgas", price: "R$ 131,44", image: "https://placehold.co/400x400/f97316/white?text=Bravecto", discount: "-25%", category: "Medicamentos" },
    { name: "Tapete Higiênico Premium", price: "R$ 52,78", image: "https://placehold.co/400x400/fb923c/white?text=Tapete", discount: "-15%", category: "Higiene" },
    { name: "Golden Gourmet Gatos", price: "R$ 2,69", image: "https://placehold.co/400x400/fdba74/white?text=Ração", discount: "-20%", category: "Alimentação" },
    { name: "NexGard Antipulgas", price: "R$ 64,72", image: "https://placehold.co/400x400/fed7aa/white?text=NexGard", discount: "-30%", category: "Medicamentos" }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Navbar Única */}
      <Navbar />

      {/* 2. Floating CTA */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${showFloatingCTA ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 bg-orange-600 text-white px-6 py-4 rounded-full shadow-2xl hover:scale-105 transition-all"
        >
          <Bell className="w-5 h-5 animate-pulse" />
          <span className="font-bold">Cadastre-se Grátis</span>
        </button>
      </div>

      {/* 3. Hero Section - Espaço pt-32 para a navbar não tapar o texto */}
      <section className="relative bg-gradient-to-br from-orange-600 to-amber-500 text-white py-24 pt-32">
        <div className={`max-w-7xl mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-full text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4" />
              🐾 Rastreador de Preços GRATUITO
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              Economize <span className="text-yellow-200">Muito Dinheiro</span> Pet!
            </h1>
            <p className="text-lg text-orange-50 mb-8">
              Alertas inteligentes das melhores ofertas da Amazon para o seu pet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-orange-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all">
                Cadastre-se GRÁTIS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Ofertas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-12">🔥 Ofertas de Hoje</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-xl mb-4" />
                <h3 className="text-lg font-bold">{product.name}</h3>
                <div className="text-2xl font-black text-orange-600 my-4">{product.price}</div>
                <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold">Ver na Amazon</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-black text-white mb-4">🐾 OpitWeb</h3>
          <p className="text-sm border-t border-gray-800 pt-8">© 2024 OpitWeb. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
