'use client'

import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, Star, CheckCircle, Tag, TrendingDown, Bell, Heart, ChevronRight, Users, ThumbsUp, Zap, Award, BadgeCheck, Sparkles, ShoppingCart, AlertCircle, Search, MapPin } from 'lucide-react';

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
    { icon: <Bell className="w-10 h-10" />, title: "Alertas Inteligentes", desc: "Receba notificações por e-mail quando os preços dos seus produtos favoritos caírem" },
    { icon: <TrendingDown className="w-10 h-10" />, title: "Histórico de Preços", desc: "Visualize gráficos completos do histórico de preços da Amazon" },
    { icon: <Tag className="w-10 h-10" />, title: "Melhores Ofertas", desc: "Encontre as melhores promoções em produtos pet todos os dias" },
    { icon: <Heart className="w-10 h-10" />, title: "100% Gratuito", desc: "Use todos os recursos sem pagar nada. Economize muito dinheiro!" }
  ];

  const stats = [
    { number: "50k+", label: "Produtos Rastreados", icon: <Search className="w-8 h-8" /> },
    { number: "10k+", label: "Usuários Ativos", icon: <Users className="w-8 h-8" /> },
    { number: "35%", label: "Economia Média", icon: <TrendingDown className="w-8 h-8" /> },
    { number: "24/7", label: "Monitoramento", icon: <Clock className="w-8 h-8" /> }
  ];

  const testimonials = [
    { name: "Maria Silva", text: "Economizei mais de R$500 em 3 meses! O alerta de preços é perfeito para não perder nenhuma promoção.", pet: "🐕" },
    { name: "João Santos", text: "Nunca mais paguei preço cheio! Sempre espero os alertas do OpitWeb antes de comprar qualquer coisa para meu gato.", pet: "🐱" },
    { name: "Ana Costa", text: "O histórico de preços me mostrou que eu estava pagando muito caro. Agora só compro no momento certo!", pet: "🐕" }
  ];

  const handleNewsletterSubmit = () => {
    if (email) {
      alert(`🎉 Obrigado! Você receberá alertas de ofertas em ${email}`);
      setEmail('');
    }
  };

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* O BLOCO <header> FOI REMOVIDO DAQUI PORQUE JÁ ESTÁ NO LAYOUT.JS */}

      {/* Floating CTA Button */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${showFloatingCTA ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
        >
          <Bell className="w-5 h-5 animate-pulse" />
          <span className="font-bold">Cadastre-se Grátis</span>
        </button>
      </div>

      {/* Hero Section - Adicionado pt-20 para não ficar por baixo da navbar */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 text-white py-24 pt-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.15) 0%, transparent 50%)',
            animation: 'pulse 4s ease-in-out infinite'
          }}></div>
        </div>
        
        <div className={`relative max-w-7xl mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg hover:shadow-orange-300/50 transition-shadow">
              <Sparkles className="w-4 h-4" />
              🐾 Rastreador de Preços GRATUITO para Produtos Pet
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Economize <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-white">Muito Dinheiro</span> nas Compras Pet!
            </h1>
            
            <p className="text-2xl text-orange-100 mb-4 font-semibold">
              🎯 Receba Alertas Quando os Preços Caírem na Amazon
            </p>
            
            <p className="text-lg text-orange-50 mb-8 leading-relaxed">
              A OpitWeb é o rastreador de preços GRATUITO que te alerta sobre as melhores ofertas em produtos pet da Amazon. Cadastre-se e pare de pagar caro!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-white text-orange-600 hover:bg-gray-100 px-10 py-5 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2">
                Cadastre-se GRÁTIS
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-white hover:bg-white hover:text-orange-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                <Tag className="w-5 h-5" />
                Ver Ofertas do Dia
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Restante das secções (Stats, Categories, etc) mantêm-se iguais... */}
      {/* ... (Omitido para brevidade, mas deve manter o resto do seu código original) ... */}
    </main>
  );
}
