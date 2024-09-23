'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export default function NavLinks() {
  const pathname = usePathname()
 
  return (
    <nav>
      <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
        Home
      </Link>

      <Link className={`link ${pathname === '/works' ? 'active' : ''}`} href="/works" >
        Works
      </Link>
 
      <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about" >
        About
      </Link>

      <Link className={`link ${pathname === '/contact' ? 'active' : ''}`} href="/contact">
        Contact
      </Link>
    </nav>
  )
}