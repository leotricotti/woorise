import { Link } from "react-router-dom";
import groupBlockData from "../../assets/data/groupBlockData.js";
import styles from "./groupBlock.module.css";

function GroupBlock() {
  const data = groupBlockData;

  return (
    <section className={styles.groupBlock}>
      {data.map((item) => (
        <div className={styles.groupBlockInner} key={item.id}>
          <img src={item.img} alt="Group block visual description" />
          <p className={styles.headingTag}>{item.tag}</p>
          <h2 className={styles.title}>{item.title}</h2>
          <p className={styles.description}>{item.description}</p>
          <Link to={item.url} className={styles.link}>
            {item.link}
          </Link>
        </div>
      ))}
    </section>
  );
}

export default GroupBlock;
