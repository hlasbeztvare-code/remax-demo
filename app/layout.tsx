import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RE/MAX ALPHA LUXURY | Michal Černý',
  description: 'Privátní nabídka exkluzivních nemovitostí',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
