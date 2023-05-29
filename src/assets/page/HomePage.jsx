import Header from "../../components/header/Header";
import HeroSection from "../../components/heroSection/HeroSection";
import ClientsSection from "../../components/clientsSection/ClientsSection";
import styles from "./homePage.module.css";

function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.siteInner}>
        <HeroSection />
        <ClientsSection />
      </main>
    </>
  );
}

export default HomePage;
