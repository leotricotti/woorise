import Header from "../components/header/Header";
import HeroSection from "../components/heroSection/HeroSection";
import ClientsSection from "../components/clientsSection/ClientsSection";
import BoxesSection from "../components/boxesSection/BoxesSection";
import GroupBlock from "../components/groupBlock/GroupBlock";
import Button from "../components/button/Button";
import Entries from "../components/entries/Entries";
import heroSectionData from "../assets/data/heroSectionData";
import Testimonials from "../components/testimonials/Testimonials";
import boxSectionData from "../assets/data/boxSectionData.js";
import boxSectionTwoData from "../assets/data/boxSectionTwoData";
import groupBlockData from "../assets/data/groupBlockData";
import testimonialsData from "../assets/data/testimonialsData";
import styles from "./homePage.module.css";

function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.siteInner}>
        <HeroSection data={heroSectionData} />
        <ClientsSection />
        <BoxesSection data={boxSectionData} />
        <GroupBlock data={groupBlockData} />
        <BoxesSection data={boxSectionTwoData} />
        <Button data={boxSectionTwoData} />
        <Testimonials data={testimonialsData} />
        <Entries />
      </main>
    </>
  );
}

export default HomePage;
