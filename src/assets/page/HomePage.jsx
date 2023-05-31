import Header from "../../components/header/Header";
import HeroSection from "../../components/heroSection/HeroSection";
import ClientsSection from "../../components/clientsSection/ClientsSection";
import BoxesSection from "../../components/boxesSection/BoxesSection";
import GroupBlock from "../../components/groupBlock/GroupBlock";
import styles from "./homePage.module.css";

function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.siteInner}>
        <HeroSection />
        <ClientsSection />
        <BoxesSection />
        <GroupBlock />
      </main>
    </>
  );
}

export default HomePage;
