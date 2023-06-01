import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./heroSection.module.css";

HeroSection.propTypes = {
  data: PropTypes.array,
};

function HeroSection({ data }) {
  return (
    <section className={styles.heroSection}>
      {
        (data.map = (item) => (
          <article className={styles.heroSection__container} key={item.id}>
            <div className={styles.inner__container}>
              <h1 className={styles.main__title}>{item.title}</h1>
              <p className={styles.main__description}>
                {item.text1}
                <br />
                {item.text2}
              </p>
            </div>
            <div className={styles.hero__btn}>
              <Link
                to={item.linkUrl}
                target="_blank"
                className={styles.navLink}
              >
                <button className={styles.btn__primary}>{item.linkText}</button>
              </Link>
            </div>
          </article>
        ))
      }
    </section>
  );
}

export default HeroSection;
