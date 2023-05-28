import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/woorise-logo.svg";
import menuToggleData from "../../assets/data/togleMenuData";
import styles from "./header.module.css";

function Header() {
  const data = menuToggleData;
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header
      className={`${styles.siteHeader} ${navOpen ? styles.headerOpen : ""}`}
    >
      <div className={styles.wrap}>
        <div className={styles.titleArea}>
          <Link to="/">
            <img src={logo} alt="Woorise logo" />
          </Link>
        </div>
        <button
          className={styles.menuToggle}
          aria-expanded={false}
          aria-pressed={false}
          role="button"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className={styles.toggleLine}></span>
        </button>
      </div>
      <nav className={styles.navPrimary} aria-label="Main navigation">
        <ul
          id="menu-main"
          className={`${styles.navMenu} ${navOpen ? styles.navOpen : ""}`}
        >
          {data.map((item) => (
            <li key={item.id} id="menu-item-73" className={styles.menuItem}>
              <Link to="#">{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
