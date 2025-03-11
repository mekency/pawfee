import Image from 'next/image';
import styles from './page.module.css';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
  title: "Accueil | Pawfee",
  description: "Page d'accueil du site de ladoption des chats.",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Image src="/logo.jpg" alt="Main Image" className={styles.image} width={600} height={400} />
      
      <div className={styles.section}>
        <h2>Who Are We</h2>
        <p>Our Mission</p>
        <p>
          At Pawfee Shop, we believe in second chances—for cats and for people. Our mission is to create a cozy, welcoming space where you can enjoy great coffee while making a difference in the lives of rescued cats.
        </p>
        <p>
          We rescue stray and abandoned cats from the streets, provide them with the care they need, including vaccinations, medical treatment, and lots of love. Once they're healthy and ready, these furry friends find a temporary home at our coffee shop, where they can meet their future forever families.
        </p>
        <p>
          Every sip of coffee, every pastry enjoyed, and every moment spent at Pawfee Shop directly supports this mission. 100% of our profits go toward rescuing, rehabilitating, and rehoming more cats in need.
        </p>
        <p>
          When you visit Pawfee Shop, you're not just stopping by for coffee—you’re helping us save lives, one paw at a time.
        </p>
      </div>
    </div>
  );
}