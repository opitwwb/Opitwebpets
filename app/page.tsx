'use client'

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar'; // Certifique-se que o caminho está correto
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

  const benefits = [
    { icon: <Bell className="w-10 h-10" />, title: "Alertas Inteligentes", desc: "Receba notificações por e-mail quando os preços caírem" },
    { icon: <TrendingDown className="w-10 h-10" />, title: "Histórico de Preços", desc: "Visualize gráficos completos de preços da Amazon" },
    { icon: <Tag className="w-10 h-10" />, title: "Melhores Ofertas", desc: "Encontre as melhores promoções pet todos os dias" },
    { icon: <Heart className="w-10 h-10" />, title: "100% Gratuito", desc: "Use todos os recursos sem pagar nada!" }
  ];

  const stats = [
    { number: "50k+", label: "Produtos Rastreados", icon: <Search className="w-8 h-8" /> },
    { number: "10k+", label: "Usuários Ativos", icon: <Users className="w-8 h-8" /> },
    { number: "35%", label: "Economia Média", icon: <TrendingDown className="w-8 h-8" /> },
    { number: "24/7", label: "Monitoramento", icon: <Clock className="w-8 h-8" /> }
  ];

  const testimonials = [
    { name: "Maria Silva", text: "Economizei mais de R$500 em 3 meses! O alerta de preços é perfeito.", pet: "🐕" },
    { name: "João Santos", text: "Nunca mais paguei preço cheio! Sempre espero os alertas do OpitWeb.", pet: "🐱" },
    { name: "Ana Costa", text: "O histórico de preços me mostrou que eu estava pagando muito caro.", pet: "🐕" }
  ];

  const handleNewsletterSubmit = () => {
    if (email) {
      alert(`🎉 Obrigado! Você receberá alertas em ${email}`);
      setEmail('');
    }
  };

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* A Navbar agora é chamada uma única vez aqui. 
         IMPORTANTE: Verifique se não há outra Navbar no seu layout.js
      */}
      <Navbar />

      {/* Floating CTA Button */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${showFloatingCTA ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-4 rounded-full shadow-2xl hover:scale-105 transition-all"
        >
          <Bell className="w-5 h-5 animate-pulse" />
          <span className="font-bold">Cadastre-se Grátis</span>
        </button>
      </div>

      {/* Hero Section - pt-32 para compensar a Navbar Fixa */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-50 to-amber-500 text-white py-24 pt-32 overflow-hidden">
        <div className={`relative max-w-7xl mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <Sparkles className="w-4 h-4" />
              🐾 Rastreador de Preços GRATUITO para Produtos Pet
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Economize <span className="text-yellow-200">Muito Dinheiro</span> nas Compras Pet!
            </h1>
            <p className="text-lg text-orange-50 mb-8 leading-relaxed">
              A OpitWeb é o rastreador de preços GRATUITO que te alerta sobre as melhores ofertas da Amazon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-orange-600 px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:bg-gray-100 transition-all">
                Cadastre-se GRÁTIS
              </button>
              <button className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-orange-600 transition-all">
                Ver Ofertas do Dia
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-orange-700 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center text-white">
                <div className="flex justify-center mb-3 text-yellow-300">{stat.icon}</div>
                <div className="text-4xl font-black">{stat.number}</div>
                <div className="text-orange-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900">Navegue por Categorias</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['Alimentação', 'Medicamentos', 'Higiene', 'Brinquedos', 'Camas', 'Acessórios'].map((cat, i) => (
              <button key={i} className="p-6 rounded-2xl border-2 border-orange-100 hover:border-orange-500 transition-all text-center">
                <div className="text-4xl mb-3">{['🍖', '💊', '🧼', '🎾', '🛏️', '🎒'][i]}</div>
                <h3 className="font-bold text-gray-900">{cat}</h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-12">🔥 Ofertas em Destaque Hoje</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-xl mb-4" />
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold">{product.category}</span>
                <h3 className="text-lg font-bold mt-2">{product.name}</h3>
                <div className="text-2xl font-black text-orange-600 my-4">{product.price}</div>
                <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-bold hover:bg-orange-700 transition-all">
                  Ver na Amazon
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-black text-white mb-4">🐾 OpitWeb</h3>
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
            <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> (11) 96101-7230</p>
            <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> contato@opitweb.com.br</p>
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> São Paulo</p>
          </div>
          <p className="text-sm border-t border-gray-800 pt-8">© 2024 OpitWeb. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
