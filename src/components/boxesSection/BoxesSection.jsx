import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import sectionData from "../../assets/data/boxSectionData";
import styles from "./boxesSection.module.css";

BoxesSection.propTypes = {
  data: PropTypes.array,
};

function BoxesSection() {
  const data = sectionData;

  return (
    <section className={styles.sectionBoxes}>
      <div className={styles.heading}>
        <h2 className={styles.headingTitle}></h2>
        <p className={styles.headingParagraph}></p>
      </div>
      <div className={styles.flexContainer}>
        {data.map((item) => {
          return (
            <div className={styles.boxes} key={item.id}>
              <img src={item.url} alt={item.alt} />
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.paragraph}>{item.text}</p>
              <Link to={"/"} target="_blank" className={styles.navLink}>
                {item.link}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default BoxesSection;
