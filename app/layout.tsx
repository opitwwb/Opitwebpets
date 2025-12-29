import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OpitWeb - Economize nas Compras Pet',
  description: 'Rastreador de preços gratuito da Amazon para produtos pet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
