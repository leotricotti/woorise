import Header from "../../components/header/Header";
import HeroSection from "../../components/heroSection/HeroSection";
import styles from "./homePage.module.css";

function HomePage() {
  return (
    <main className={styles.siteContainer}>
      <Header />
      <HeroSection />
    </main>
  );
}

export default HomePage;
