import { Link } from "react-router-dom";
import styles from "./heroSection.module.css";

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <article className={styles.heroSection__container}>
        <div className={styles.inner__container}>
          <h1 className={styles.main__title}>
            All-In-One Lead Generation & Marketing Platform
          </h1>
          <p className={styles.main__description}>
            Easily create viral giveaways & contests, landing pages and engaging
            forms such as surveys and quizzes.
            <br />
            Woorise helps small business connect with an audience, collect leads
            and close sales.
          </p>
        </div>
        <div className={styles.hero__btn}>
          <Link to={"/"} target="_blank" className={styles.navLink}>
            <button className={styles.btn__primary}>Start Free</button>
          </Link>
        </div>
      </article>
    </section>
  );
}

export default HeroSection;
