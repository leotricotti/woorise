import { Link } from "react-router-dom";
import styles from "./button.module.css";

function Button({ data }) {
  return data.cards.map((item) =>
    item.linkUrl !== undefined ? (
      <button className={styles.linkContainer} key={item.id}>
        <Link to={item.linkUrl} className={styles.link}>
          {item.linkText}
        </Link>
      </button>
    ) : null
  );
}

export default Button;
