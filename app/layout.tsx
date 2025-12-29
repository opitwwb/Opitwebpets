import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: 'Opitweb - Rastreador de Preços Pet na Amazon',
  description: 'Economize em produtos para seu pet! Rastreador gratuito de preços da Amazon. Receba alertas e nunca mais pague a mais.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
