import './globalsimport './globalsimport './globalsimport './globalsimport './globalsimport './globalsimport './globalsimpXURY | Michal Černý',
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
