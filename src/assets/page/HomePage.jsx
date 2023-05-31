import Header from "../../components/header/Header";
import HeroSection from "../../components/heroSection/HeroSection";
import ClientsSection from "../../components/clientsSection/ClientsSection";
import BoxesSection from "../../components/boxesSection/BoxesSection";
import GrupBlock from "../../components/groupBlock/GrupBlock";
import styles from "./homePage.module.css";

function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.siteInner}>
        <HeroSection />
        <ClientsSection />
        <BoxesSection />
        <GrupBlock />
      </main>
    </>
  );
}

export default HomePage;
