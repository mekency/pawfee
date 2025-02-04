import styles from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href="/OurPaws">OurPaws</Link>
          </li>
          <li>
            <Link href="/Menu">Menu</Link> 
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}