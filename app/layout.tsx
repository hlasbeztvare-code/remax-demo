import './globals.css'

export const metadata = {
  title: 'RE/MAX ALPHA | LUXURY',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body style={{ background: 'black' }}>{children}</body>
    </html>
  )
}
