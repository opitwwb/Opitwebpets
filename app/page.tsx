'use client'

import React, { useState, useEffect } from 'react';
import { Mail, Star, CheckCircle, Tag, TrendingDown, Bell, Heart, ChevronRight, Users, Sparkles, Search, MapPin, Phone, Clock } from 'lucide-react';

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
      {/* A NAVBAR ANTIGA FOI REMOVIDA DAQUI. 
          ELA AGORA É GERIDA PELO layout.js 
      */}

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

      {/* Hero Section - Adicionado pt-32 para compensar a navbar fixa */}
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
              
              <button className="border-3 border-white hover:bg-white hover:text-orange-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                <Tag className="w-5 h-5" />
                Ver Ofertas do Dia
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-gradient-to-r from-orange-700 to-orange-600 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-110 transition-all duration-300">
                <div className="flex justify-center mb-3 text-yellow-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-orange-100 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4">🏪 Navegue por Categorias</h2>
            <p className="text-gray-600">Encontre os melhores preços em cada categoria</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['Alimentação', 'Medicamentos', 'Higiene', 'Brinquedos', 'Camas', 'Acessórios'].map((cat, i) => (
              <button key={i} className="group bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border-2 border-orange-100 hover:border-orange-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-3">{['🍖', '💊', '🧼', '🎾', '🛏️', '🎒'][i]}</div>
                <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition">{cat}</h3>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Como Funciona? É Super Fácil! 🎉</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mb-4"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { n: 1, t: "Cadastre-se Grátis", d: "Crie sua conta gratuita em segundos." },
              { n: 2, t: "Escolha Produtos", d: "Selecione os produtos pet que você mais compra." },
              { n: 3, t: "Receba Alertas", d: "Quando o preço cair, você recebe um e-mail!" }
            ].map((step) => (
              <div key={step.n} className="text-center group">
                <div className="bg-gradient-to-br from-orange-50 to-white p-12 rounded-3xl border-2 border-orange-100 hover:border-orange-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full text-3xl font-black mb-6 shadow-lg">
                    {step.n}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.t}</h3>
                  <p className="text-gray-600">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-gray-900 mb-4">🔥 Ofertas em Destaque Hoje</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="group bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border-2 border-orange-100 hover:border-orange-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="mb-4 rounded-xl overflow-hidden bg-white border border-gray-100">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold mb-2">{product.category}</div>
                  <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold mb-3 ml-2">{product.discount}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 min-h-[3rem]">{product.name}</h3>
                  <div className="text-3xl font-black text-orange-600 mb-4">{product.price}</div>
                  <button className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-bold">Ver na Amazon</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-amber-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-8">Não Perca Nenhuma Oferta! 📧</h2>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor e-mail"
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none"
            />
            <button onClick={handleNewsletterSubmit} className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold">Quero Economizar!</button>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-3xl font-black text-white mb-2">🐾 OpitWeb</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <p className="flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-orange-500" /> (11) 96101-7230</p>
            <p className="flex items-center justify-center gap-2"><Mail className="w-4 h-4 text-orange-500" /> contato@opitweb.com.br</p>
            <p className="flex items-center justify-center gap-2"><MapPin className="w-4 h-4 text-orange-500" /> São Paulo</p>
          </div>
          <div className="border-t border-gray-800 pt-8 text-sm">
            © 2024 OpitWeb. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}
