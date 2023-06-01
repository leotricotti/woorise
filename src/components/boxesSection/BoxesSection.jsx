import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./boxesSection.module.css";

BoxesSection.propTypes = {
  data: PropTypes.object,
};

function BoxesSection({ data }) {
  return (
    <section className={styles.sectionBoxes}>
      <div className={styles.headingContainer} key={data.heading.id}>
        <h2 className={styles.title}>{data.heading.title}</h2>
        <p className={styles.text}>{data.heading.text}</p>
      </div>
      <div className={styles.flexContainer}>
        {data.cards.map((item) => (
          <div className={styles.boxes} key={item.id}>
            <img src={item.url} alt={item.alt} />
            <h3 className={styles.boxTitle}>{item.title}</h3>
            <p className={styles.boxText}>{item.text}</p>
            {item.link !== undefined ? (
              <Link
                to={item.linkUrl}
                target="_blank"
                className={styles.navLink}
              >
                {item.link}
              </Link>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}

export default BoxesSection;
