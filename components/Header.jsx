import styles from './Header.module.css';
import Link from 'next/link';

//ajoute de liaison pour les page 
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
            <Link href="/Menu">Menu</Link> {/* Updated link */}
          </li>
          <li>
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}