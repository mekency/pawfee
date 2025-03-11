import Header from '../components/Header';
import Footer from '../components/Footer';
import '../app/globals.css';

export const metadata = {
  title: "Pawfee - Adoption d'animaux",
  description: "Découvrez des centaines d'animaux à l'adoption dans différents refuges à travers la province de ontario.",
  keywords: "adoption, animaux, refuges, Québec, chiens, chats, adoption d'animaux",
  author: "Pawfee",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  charset: "UTF-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content={metadata.viewport} />
        <meta name="robots" content={metadata.robots} />
        <meta charSet={metadata.charset} />
        <title>{metadata.title}</title>
      </head>
      <body>
        <div className="content">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}