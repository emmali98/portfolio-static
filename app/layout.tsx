import NavLinks from '@/components/nav.jsx';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header><NavLinks /></header>
        <main>{children}</main>
      </body>
    </html>
  )
}