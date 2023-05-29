import { Link } from "react-router-dom";
import styles from "./boxesSection.module.css";

function BoxesSection({ data }) {
  return (
    <section className={styles.sectionBoxes}>
      <div className={styles.heading}>
        <h2 className={styles.headingTitle}></h2>
        <p className={styles.headingParagraph}></p>
      </div>
      <div className={styles.flexContainer}>
        {data.map((item) => {
          return (
            <div className={styles.boxes}>
              <img src={item.url} alt={item.alt} />
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.paragraph}>{item.paragraph}</p>
              <Link to={"/"} target="_blank" className={styles.navLink}></Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default BoxesSection;
