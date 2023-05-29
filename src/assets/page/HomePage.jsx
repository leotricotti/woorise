import Header from "../../components/header/Header";
import HeroSection from "../../components/heroSection/HeroSection";
import styles from "./homePage.module.css";

function HomePage() {
  return (
    <>
      <Header />
      <div className={styles.siteInner}>
        <HeroSection />
      </div>
    </>
  );
}

export default HomePage;
