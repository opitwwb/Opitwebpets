import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-purple-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-3xl">🐾</span>
              <h3 className="text-xl font-bold">Opitweb</h3>
            </div>
            <p className="text-purple-200 text-sm leading-relaxed">
              Rastreador gratuito de preços pet na Amazon. Economize sem esforço!
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="text-purple-200 hover:text-white transition-colors">Início</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-purple-200 hover:text-white transition-colors">Sobre Nós</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="text-purple-200 hover:text-white transition-colors">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-purple-200 hover:text-white transition-colors">Contato</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-purple-200 text-sm">
              <li className="flex items-center space-x-2">
                <span>📧</span>
                <a href="mailto:opitweb@gmail.com" className="hover:text-white transition-colors">
                  opitweb@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span>📱</span>
                <a href="tel:+5511961017230" className="hover:text-white transition-colors">
                  +55 (11) 96101-7230
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span>⏰</span>
                <span>Seg-Sex: 9h-18h</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4">Fique por Dentro</h4>
            <p className="text-purple-200 text-sm mb-4">
              Receba alertas das melhores ofertas!
            </p>
            <Link href="/contact">
              <a className="inline-block bg-white text-purple-700 px-6 py-2 rounded-lg font-semibold hover:bg-purple-100 transition-all">
                Entrar em Contato
              </a>
            </Link>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-purple-700 mt-8 pt-8 text-center">
          <p className="text-purple-200 text-sm">
            &copy; {new Date().getFullYear()} Opitweb - Todos os direitos reservados. Feito com ❤️ para você e seu pet.
          </p>
        </div>
      </div>
    </footer>
  );
}
