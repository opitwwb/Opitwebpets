export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16 animate-fadeInDown">
          <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            🐾 Opitweb
          </h1>
          <div className="text-2xl text-white/95 mb-4">
            Seu Rastreador Gratuito de Preços Pet na Amazon
          </div>
          <div className="text-xl text-white/90 italic">
            Nós unimos o amor pelos animais com a inteligência financeira. Nunca mais pague a mais por ração, brinquedos ou acessórios do seu pet favorito!
          </div>
        </header>

        {/* Conteúdo Principal */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 space-y-12">
          
          {/* O Que Somos */}
          <section>
            <div className="flex items-center mb-6">
              <span className="text-5xl mr-4">🎯</span>
              <div>
                <h2 className="text-3xl font-bold text-purple-600">O Que Somos e a Nossa Missão</h2>
                <h3 className="text-2xl text-purple-500 mt-2">O Nosso Propósito</h3>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              <strong>O Que Fazemos:</strong> A Opitweb é uma ferramenta gratuita de rastreamento de preços especializada em produtos para animais de estimação na Amazon. Nós monitoramos milhares de itens e te alertamos sobre as melhores ofertas no momento certo.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Missão:</strong> Simplificar a vida dos donos de pets, garantindo que eles economizem dinheiro sem comprometer a qualidade e o bem-estar dos seus companheiros.
            </p>
          </section>

          {/* Nossa História */}
          <section>
            <div className="flex items-center mb-6">
              <span className="text-5xl mr-4">📖</span>
              <div>
                <h2 className="text-3xl font-bold text-purple-600">Nossa História</h2>
                <h3 className="text-2xl text-purple-500 mt-2">A Conexão com os Pets</h3>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              A Opitweb nasceu quando percebemos o quão volátil é o preço dos produtos pet na Amazon. Como donos de animais de estimação, ficávamos frustrados por pagar preços diferentes pelo mesmo saco de ração toda semana.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Decidimos criar uma solução que pudesse monitorar esses movimentos de mercado e notificar outros donos de pets. Hoje, somos uma comunidade dedicada a garantir que você tenha acesso aos melhores produtos com a máxima economia.
            </p>
          </section>

          {/* Nossos Valores */}
          <section>
            <div className="flex items-center mb-6">
              <span className="text-5xl mr-4">⭐</span>
              <div>
                <h2 className="text-3xl font-bold text-purple-600">Os Nossos Valores</h2>
                <h3 className="text-2xl text-purple-500 mt-2">Nossos Pilares</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border-l-4 border-purple-600 hover:shadow-lg transition-all hover:-translate-y-1">
                <h4 className="text-xl font-bold text-purple-700 mb-3">💰 Economia Inteligente</h4>
                <p className="text-gray-700">Foco em encontrar descontos reais, não apenas promoções superficiais.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border-l-4 border-purple-600 hover:shadow-lg transition-all hover:-translate-y-1">
                <h4 className="text-xl font-bold text-purple-700 mb-3">🐕 Pet-First</h4>
                <p className="text-gray-700">O bem-estar do seu animal é nossa prioridade; promovemos produtos de qualidade a preços justos.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border-l-4 border-purple-600 hover:shadow-lg transition-all hover:-translate-y-1">
                <h4 className="text-xl font-bold text-purple-700 mb-3">🔍 Transparência</h4>
                <p className="text-gray-700">Nosso serviço é gratuito. As ofertas são claras, sem pegadinhas.</p>
              </div>
            </div>
          </section>

          {/* Como Ajudamos */}
          <section>
            <div className="flex items-center mb-6">
              <span className="text-5xl mr-4">🚀</span>
              <div>
                <h2 className="text-3xl font-bold text-purple-600">Como a Opitweb Ajuda Você</h2>
                <h3 className="text-2xl text-purple-500 mt-2">Seu Caminho para a Economia</h3>
              </div>
            </div>
            <div className="space-y-6 mt-8">
              <div className="flex items-start bg-gray-50 p-6 rounded-2xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 transition-all hover:translate-x-2">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white text-xl font-bold mr-6">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-bold text-purple-700 mb-2">Rastreie Seus Favoritos</h4>
                  <p className="text-gray-700">Você seleciona os produtos pet da Amazon que costuma comprar.</p>
                </div>
              </div>
              <div className="flex items-start bg-gray-50 p-6 rounded-2xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 transition-all hover:translate-x-2">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white text-xl font-bold mr-6">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-bold text-purple-700 mb-2">Receba Alertas</h4>
                  <p className="text-gray-700">Nós te notificamos instantaneamente quando o preço atingir um valor ideal ou entrar em Oferta Relâmpago.</p>
                </div>
              </div>
              <div className="flex items-start bg-gray-50 p-6 rounded-2xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100 transition-all hover:translate-x-2">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white text-xl font-bold mr-6">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-bold text-purple-700 mb-2">Compre e Economize</h4>
                  <p className="text-gray-700">Clique, compre na Amazon e veja o dinheiro extra no seu bolso.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-8 rounded-2xl text-center text-white">
            <p className="text-xl font-semibold">💚 Junte-se a milhares de donos de pets que já economizam com a Opitweb!</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 text-white">
          <p className="text-sm">&copy; 2025 Opitweb - Todos os direitos reservados</p>
          <p className="text-sm mt-2">Feito com ❤️ para você e seu pet</p>
        </footer>
      </div>
    </div>
  );
}
