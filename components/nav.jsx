'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from '../styles/nav.module.scss'
 
export default function NavLinks() {
  const pathname = usePathname()
 
  return (
    <nav className={styles.navigation}>
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