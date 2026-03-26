import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" style={{ backgroundColor: 'black' }}>
      <body style={{ backgroundColor: 'black', margin: 0 }}>{children}</body>
    </html>
  )
}
