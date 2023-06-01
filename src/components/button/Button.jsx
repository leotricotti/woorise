import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./button.module.css";

Button.propTypes = {
  data: PropTypes.object,
};

function Button({ data }) {
  return data.cards.map((item) =>
    item.linkUrl !== undefined ? (
      <div className={styles.linkContainer} key={item.id}>
        <Link to={item.linkUrl} className={styles.link}>
          {item.linkText}
        </Link>
      </div>
    ) : null
  );
}

export default Button;
