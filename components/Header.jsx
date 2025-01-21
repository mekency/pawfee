import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.nav}>
          <li>Acceuil</li>
          <li>Our Paws</li>
          <li>Menu</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}