import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./groupBlock.module.css";

GroupBlock.propTypes = {
  data: PropTypes.array,
};

function GroupBlock({ data }) {
  return data.map((item) => (
    <section className={styles.groupContainer} key={item.id}>
      <div></div>
      <img
        src={item.img}
        alt="Group block visual description"
        className={styles.img}
      />
      <p className={styles.headingTag}>{item.tag}</p>
      <h2 className={styles.title}>{item.title}</h2>
      <p className={styles.description}>{item.description}</p>
      <div className={styles.linkContainer}>
        {item.url !== undefined ? (
          <Link to={item.url} className={styles.link}>
            {item.link}
          </Link>
        ) : null}
      </div>
    </section>
  ));
}

export default GroupBlock;
