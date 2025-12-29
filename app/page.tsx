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
      {/* Header/Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-2xl">
                🐾
              </div>
              <div>
                <h1 className="text-2xl font-black text-gray-900">OpitWeb</h1>
                <p className="text-xs text-gray-500">Economia Pet</p>
              </div>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-700 hover:text-orange-600 font-semibold transition">Home</a>
              <a href="#" className="text-gray-700 hover:text-orange-600 font-semibold transition">Ofertas</a>
              <a href="#" className="text-gray-700 hover:text-orange-600 font-semibold transition">Blog</a>
              <a href="#" className="text-gray-700 hover:text-orange-600 font-semibold transition">Sobre</a>
              <a href="#" className="text-gray-700 hover:text-orange-600 font-semibold transition">Contato</a>
            </nav>
            
            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <button className="hidden sm:block bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg">
                Entrar / Cadastrar
              </button>
              <button className="md:hidden text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 text-white py-24 overflow-hidden">
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
            
            <div className="mt-8 flex items-center gap-2 text-orange-50">
              <CheckCircle className="w-5 h-5 text-yellow-300" />
              <span className="font-semibold">Mais de 10.000 pessoas já estão economizando!</span>
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

      {/* Categories Section - NEW */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900 mb-4">🏪 Navegue por Categorias</h2>
            <p className="text-gray-600">Encontre os melhores preços em cada categoria</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <button className="group bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border-2 border-orange-100 hover:border-orange-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-3">🍖</div>
              <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition">Alimentação</h3>
              <p className="text-sm text-gray-500 mt-1">500+ produtos</p>
            </button>
            
            <button className="group bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border-2 border-orange-100 hover:border-orange-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-3">💊</div>
              <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition">Medicamentos</h3>
              <p className="text-sm text-gray-500 mt-1">300+ produtos</p>
            </button>
            
            <button className="group bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border-2 border-orange-100 hover:border-orange-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-3">🧼</div>
              <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition">Higiene</h3>
              <p className="text-sm text-gray-500 mt-1">250+ produtos</p>
            </button>
            
            <button className="group bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border-2 border-orange-100 hover:border-orange-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-3">🎾</div>
              <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition">Brinquedos</h3>
              <p className="text-sm text-gray-500 mt-1">400+ produtos</p>
            </button>
            
            <button className="group bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border-2 border-orange-100 hover:border-orange-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-3">🛏️</div>
              <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition">Camas</h3>
              <p className="text-sm text-gray-500 mt-1">180+ produtos</p>
            </button>
            
            <button className="group bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border-2 border-orange-100 hover:border-orange-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl mb-3">🎒</div>
              <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition">Acessórios</h3>
              <p className="text-sm text-gray-500 mt-1">350+ produtos</p>
            </button>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Como Funciona? É Super Fácil! 🎉</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">Em 3 passos simples você começa a economizar muito dinheiro</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-50 to-white p-12 rounded-3xl border-2 border-orange-100 hover:border-orange-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full text-3xl font-black mb-6 shadow-lg">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cadastre-se Grátis</h3>
                <p className="text-gray-600 leading-relaxed">Crie sua conta gratuita em segundos. Sem cartão de crédito, sem pegadinhas!</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-50 to-white p-12 rounded-3xl border-2 border-orange-100 hover:border-orange-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full text-3xl font-black mb-6 shadow-lg">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Escolha Produtos</h3>
                <p className="text-gray-600 leading-relaxed">Selecione os produtos pet que você mais compra e adicione aos seus alertas</p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-50 to-white p-12 rounded-3xl border-2 border-orange-100 hover:border-orange-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full text-3xl font-black mb-6 shadow-lg">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Receba Alertas</h3>
                <p className="text-gray-600 leading-relaxed">Quando o preço cair, você recebe um e-mail e pode comprar na hora!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Por Que Usar o OpitWeb? 🚀</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">Economize tempo e dinheiro nas suas compras pet</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, index) => (
              <div key={index} className="group bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-orange-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-orange-600 mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
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
            <p className="text-gray-600 text-lg">Produtos pet com os melhores preços da Amazon</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="group bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border-2 border-orange-100 hover:border-orange-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  {/* Product Image */}
                  <div className="mb-4 rounded-xl overflow-hidden bg-white border border-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Category Badge */}
                  <div className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold mb-2">
                    {product.category}
                  </div>
                  
                  {/* Discount Badge */}
                  <div className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-3 ml-2">
                    {product.discount}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 min-h-[3rem]">{product.name}</h3>
                  <div className="text-3xl font-black text-orange-600 mb-4">{product.price}</div>
                  <button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg">
                    Ver na Amazon
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)',
          }}></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6 shadow-2xl">
            <Mail className="w-10 h-10 text-orange-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Não Perca Nenhuma Oferta! 📧</h2>
          <p className="text-orange-50 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Cadastre-se GRÁTIS e receba alertas de preços direto no seu e-mail. Economize até 50% nas suas compras pet!
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="flex-1 px-6 py-5 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-yellow-400 shadow-xl text-lg"
              />
              <button
                onClick={handleNewsletterSubmit}
                className="bg-white hover:bg-gray-100 text-orange-600 px-10 py-5 rounded-xl font-bold transition-all transform hover:scale-105 shadow-xl text-lg whitespace-nowrap"
              >
                Quero Economizar!
              </button>
            </div>
            <div className="flex items-center justify-center gap-2 text-orange-50 text-sm mt-4">
              <CheckCircle className="w-4 h-4" />
              <span>100% gratuito • Cancele quando quiser</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">O Que Nossos Usuários Dizem 💬</h2>
            <div className="flex justify-center space-x-1 mb-2">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
            </div>
            <p className="text-gray-600 text-lg">Avaliação 5.0 estrelas de usuários satisfeitos</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-orange-600">
                <div className="text-4xl mb-4 text-center">{review.pet}</div>
                <div className="flex space-x-1 mb-4 justify-center">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed text-center">"{review.text}"</p>
                <p className="font-bold text-gray-900 text-lg text-center">— {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Pronto Para Economizar Muito Dinheiro? 💰</h2>
          <p className="text-orange-100 text-xl mb-8 leading-relaxed">
            Junte-se a milhares de pessoas que já estão economizando nas compras pet com o OpitWeb!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 hover:bg-gray-100 px-10 py-6 rounded-xl font-bold text-xl transition-all transform hover:scale-105 shadow-2xl">
              <Bell className="w-6 h-6" />
              Cadastrar Grátis Agora
            </button>
            <button className="border-3 border-white hover:bg-white hover:text-orange-600 px-10 py-6 rounded-xl font-bold text-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              <Tag className="w-6 h-6" />
              Ver Todas as Ofertas
            </button>
          </div>
          
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
              <p className="font-bold text-sm">100% Gratuito</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
              <p className="font-bold text-sm">Sem Compromisso</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
              <p className="font-bold text-sm">Cancele Quando Quiser</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-3xl font-black text-white mb-2">🐾 OpitWeb</h3>
            <p className="text-gray-400">Economize nas suas compras pet na Amazon</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>(11) 96101-7230</span>
              </p>
            </div>
            <div>
              <p className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-orange-500" />
                <span>contato@opitweb.com.br</span>
              </p>
            </div>
            <div>
              <p className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>Santana - São Paulo</span>
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-sm text-gray-500">
              © 2024 OpitWeb. Todos os direitos reservados. | Como Associado da Amazon, ganhamos com compras qualificadas.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
