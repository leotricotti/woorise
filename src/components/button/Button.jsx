import { Link } from "react-router-dom";
import styles from "./button.module.css";

function Button({ data }) {
  return data.map((item) => (
    <div className={styles.linkContainer} key={item.id}>
      {item.url !== undefined ? (
        <Link to={item.url} className={styles.link}>
          {item.link}
        </Link>
      ) : null}
    </div>
  ));
}

export default Button;
