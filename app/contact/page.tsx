'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve. 🐾');
    setFormData({ firstName: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            🐾 Conecte-se com a Equipe Opitweb
          </h1>
          <p className="text-2xl text-white/95">Estamos aqui para ajudar você a economizar!</p>
        </header>

        {/* Grid de Conteúdo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Seção de Informações */}
          <div className="bg-white rounded-3xl shadow-2xl p-10">
            <h2 className="text-3xl font-bold text-purple-600 mb-6">Fale com a OpitWeb</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Quer saber mais sobre como economizar nas suas próximas compras na Amazon? A equipe da OpitWeb está pronta para te ajudar!
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Se você tiver dúvidas, sugestões, ou encontrou algum problema com um alerta de preço, entre em contato conosco pelo formulário ao lado. Responderemos o mais rápido possível.
            </p>

            {/* Métodos de Contato */}
            <div className="space-y-5">
              <div className="flex items-start bg-gray-50 p-5 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 transition-all hover:translate-x-1">
                <span className="text-3xl mr-4">📧</span>
                <div>
                  <h3 className="text-lg font-bold text-purple-700">E-mail Principal</h3>
                  <a href="mailto:opitweb@gmail.com" className="text-purple-600 hover:text-purple-800 font-semibold">
                    opitweb@gmail.com
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Para dúvidas gerais e comerciais</p>
                </div>
              </div>

              <div className="flex items-start bg-gray-50 p-5 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 transition-all hover:translate-x-1">
                <span className="text-3xl mr-4">📱</span>
                <div>
                  <h3 className="text-lg font-bold text-purple-700">Telefone</h3>
                  <a href="tel:+5511961017230" className="text-purple-600 hover:text-purple-800 font-semibold">
                    +55 (11) 96101-7230
                  </a>
                </div>
              </div>

              <div className="flex items-start bg-gray-50 p-5 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 transition-all hover:translate-x-1">
                <span className="text-3xl mr-4">🛠️</span>
                <div>
                  <h3 className="text-lg font-bold text-purple-700">Suporte Técnico</h3>
                  <a href="mailto:opitweb@gmail.com" className="text-purple-600 hover:text-purple-800 font-semibold">
                    opitweb@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Horário */}
            <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-6 rounded-xl mt-8 text-center">
              <p className="font-bold text-lg mb-1">⏰ Horário de Atendimento</p>
              <p>Segunda a Sexta-feira, das 9h às 18h</p>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-white rounded-3xl shadow-2xl p-10">
            <h2 className="text-3xl font-bold text-purple-600 mb-6">Formulário de Contato</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-2">
                  Primeiro Nome <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Digite seu primeiro nome"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Endereço de E-mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Mensagem <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Como podemos ajudar você?"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold py-4 rounded-xl hover:from-purple-600 hover:to-purple-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white rounded-3xl shadow-2xl p-8 mt-12 text-center">
          <p className="text-lg text-gray-700">
            <span className="font-bold text-purple-600">A OpitWeb</span> é um rastreador de preços gratuito da Amazon. Receba alertas e economize em produtos pet que você ama — sem precisar ficar caçando ofertas.
          </p>
          <p className="text-sm text-gray-600 mt-4">&copy; 2025 Opitweb - Feito com ❤️ para você e seu pet</p>
        </footer>
      </div>
    </div>
  );
}
