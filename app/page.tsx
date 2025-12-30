'use client'

import { useState, useEffect } from 'react'
import {
  Clock,
  Tag,
  TrendingDown,
  Bell,
  Heart,
  Users,
  Search,
} from 'lucide-react'

export default function OpitWebHomePage() {
  const [email, setEmail] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [showFloatingCTA, setShowFloatingCTA] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      setShowFloatingCTA(window.scrollY > 800)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const featuredProducts = [
    {
      name: 'Bravecto® - Antipulgas',
      price: 'R$ 131,44',
      image: 'https://placehold.co/400x400/f97316/white?text=Bravecto',
    },
    {
      name: 'Tapete Higiênico Premium',
      price: 'R$ 52,78',
      image: 'https://placehold.co/400x400/fb923c/white?text=Tapete',
    },
    {
      name: 'Golden Gourmet Gatos',
      price: 'R$ 2,69',
      image: 'https://placehold.co/400x400/fdba74/white?text=Ração',
    },
    {
      name: 'NexGard Antipulgas',
      price: 'R$ 64,72',
      image: 'https://placehold.co/400x400/fed7aa/white?text=NexGard',
    },
  ]

  const benefits = [
    {
      icon: <Bell className="w-10 h-10" />,
      title: 'Alertas Inteligentes',
      desc: 'Receba notificações por e-mail quando os preços caírem',
    },
    {
      icon: <TrendingDown className="w-10 h-10" />,
      title: 'Histórico de Preços',
      desc: 'Visualize o histórico completo',
    },
    {
      icon: <Tag className="w-10 h-10" />,
      title: 'Melhores Ofertas',
      desc: 'Promoções todos os dias',
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: '100% Gratuito',
      desc: 'Use sem pagar nada',
    },
  ]

  const stats = [
    { number: '50k+', label: 'Produtos Rastreados', icon: <Search /> },
    { number: '10k+', label: 'Usuários Ativos', icon: <Users /> },
    { number: '35%', label: 'Economia Média', icon: <TrendingDown /> },
    { number: '24/7', label: 'Monitoramento', icon: <Clock /> },
  ]

  const testimonials = [
    { name: 'Maria Silva', text: 'Economizei mais de R$500!', pet: '🐕' },
    { name: 'João Santos', text: 'Nunca mais paguei preço cheio!', pet: '🐱' },
    { name: 'Ana Costa', text: 'Agora só compro no momento certo!', pet: '🐕' },
  ]

  const handleNewsletterSubmit = () => {
    if (!email) return
    alert(`🎉 Obrigado! Alertas enviados para ${email}`)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Floating CTA */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
          showFloatingCTA ? 'opacity-100' : 'opacity-0 translate-y-20'
        }`}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 bg-orange-600 text-white px-6 py-4 rounded-full shadow-xl"
        >
          <Bell className="w-5 h-5 animate-pulse" />
          Cadastre-se Grátis
        </button>
      </div>

      {/* HERO */}
      <section className="bg-gradient-to-br from-orange-600 to-amber-500 text-white py-24">
        <div
          className={`max-w-7xl mx-auto px-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            Economize Muito Dinheiro nas Compras Pet!
          </h1>
          <p className="text-xl mb-8">
            Receba alertas quando os preços caírem na Amazon
          </p>
          <button className="bg-white text-orange-600 px-10 py-5 rounded-xl font-bold">
            Cadastre-se GRÁTIS
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-orange-600 py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="mx-auto mb-2 w-fit">{s.icon}</div>
              <div className="text-4xl font-black">{s.number}</div>
              <div>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow">
              {b.icon}
              <h3 className="font-bold text-xl mt-4">{b.title}</h3>
              <p className="text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
          {featuredProducts.map((p, i) => (
            <div key={i} className="border p-6 rounded-xl text-center">
              <img src={p.image} alt={p.name} className="mb-4 mx-auto" />
              <h3 className="font-bold">{p.name}</h3>
              <p className="text-orange-600 font-black text-2xl">{p.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow text-center"
            >
              <div className="text-4xl">{t.pet}</div>
              <p className="italic">"{t.text}"</p>
              <strong>{t.name}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="py-20 bg-orange-600 text-white text-center">
        <h2 className="text-4xl font-black mb-4">
          Receba Alertas por E-mail
        </h2>
        <div className="flex justify-center gap-2">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu e-mail"
            className="px-6 py-4 rounded text-black"
          />
          <button
            onClick={handleNewsletterSubmit}
            className="bg-white text-orange-600 px-6 py-4 rounded font-bold"
          >
            Enviar
          </button>
        </div>
      </section>
    </div>
  )
}
