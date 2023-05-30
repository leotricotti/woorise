import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import boxSectionData from "../../assets/data/boxSectionData";
import styles from "./boxesSection.module.css";

BoxesSection.propTypes = {
  data: PropTypes.object,
};

function BoxesSection() {
  const data = boxSectionData;

  return (
    <section className={styles.sectionBoxes}>
      <div className={styles.heading} key={data.heading.id}>
        <h2 className={styles.headingTitle}>{data.heading.title}</h2>
        <p className={styles.headingParagraph}>{data.heading.text}</p>
      </div>

      <div className={styles.flexContainer}>
        {data.cards.map((item) => (
          <div className={styles.boxes} key={item.id}>
            <img src={item.url} alt={item.alt} />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.paragraph}>{item.text}</p>
            <Link to={"/"} target="_blank" className={styles.navLink}>
              {item.link}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BoxesSection;
