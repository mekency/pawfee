import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.nav}>
          <li>
              <Link href="/page.js">Acceuil</Link>
          </li>
          <li>
             <Link href="/CatCard.jsx">Our Paws</Link>
          </li>
          <li>Menu</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
