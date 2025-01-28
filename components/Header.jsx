import styles from './Header.module.css';
import Link from 'next/link';

//ajoute de liaison pour les pages
export default function Header() {
  return ( <header className={styles.header}>
    
      <nav>
        <ul className={styles.nav}>
            <li>
              <Link  href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/ourpaws">OurPaws</Link>
            </li>
            <li>
              <Link href="/">Menu</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
        </ul>
      </nav>
    </header>
  );
}