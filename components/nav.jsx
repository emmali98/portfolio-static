'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from '../styles/nav.module.scss'
 
export default function NavLinks() {
  const pathname = usePathname()
 
  return (
    <nav className={styles.navigation}>
      <Link className={`link ${pathname === '/' ? styles.active : ''}`} href="/">
        Emma Li
      </Link>

      <Link className={`link ${pathname === '/works' ? styles.active : ''}`} href="/works" >
        Works
      </Link>
 
      <Link className={`link ${pathname === '/about' ? styles.active : ''}`} href="/about" >
        About
      </Link>

      <Link className={`link ${pathname === '/contact' ? styles.active : ''}`} href="/contact">
        Contact
      </Link>
    </nav>
  )
}