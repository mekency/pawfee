import Header from '../components/Header';
import Footer from '../components/Footer';
import '../app/globals.css';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
  title: "Pawfee",
  description: "Site web démontrant diverses chats disponible pour l'adoption ainsi que tout leurs historiques et caractéres.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
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