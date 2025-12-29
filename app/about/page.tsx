import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            href="/"
            className="text-purple-600 hover:text-purple-800 transition-colors inline-flex items-center font-semibold"
          >
            ← Voltar para Início
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">Sobre Nós</h1>
          <p className="text-lg text-gray-700 mb-4">
            Bem-vindo ao Opitweb! Somos apaixonados por produtos pet e por oferecer dicas inteligentes para o dia a dia dos nossos clientes.
          </p>
          <p className="text-lg text-gray-700">
            Nosso objetivo é compartilhar conteúdos de qualidade sobre cuidados, produtos e economia para pets, sempre de forma prática e confiável.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mt-6 rounded-full"></div>
        </header>

        {/* Conteúdo adicional */}
        <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <p className="text-lg text-gray-700 mb-4">
            Aqui você encontrará artigos, tutoriais e novidades sobre o universo pet. Nossa missão é tornar a vida com seu pet mais fácil, divertida e econômica.
          </p>
          <p className="text-lg text-gray-700">
            Se quiser nos contatar, fale conosco através da página de contato ou explore nosso blog para mais dicas.
          </p>
        </section>

        {/* Rodapé */}
        <footer className="mt-12 p-8 bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl shadow-lg text-white text-center">
          <h3 className="text-2xl font-bold mb-4">💚 Gostou do Opitweb?</h3>
          <p className="text-lg mb-6 opacity-95">Acompanhe nosso blog e fique por dentro das novidades para seu pet!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-block bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg hover:bg-purple-50 transition-all duration-300 shadow-lg"
            >
              Ver posts do blog
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-purple-800 text-white font-semibold py-3 px-8 rounded-lg hover:bg-purple-900 transition-all duration-300 shadow-lg"
            >
              Fale conosco
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
