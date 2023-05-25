import { Link } from "react-router-dom";
import logo from "../../assets/images/woorise-logo.svg";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.wrap}>
        <div className={styles.titleArea}>
          <Link to="/">
            <img src={logo} alt="Woorise logo" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
