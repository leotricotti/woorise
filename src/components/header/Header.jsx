import { Link } from "react-router-dom";
import logo from "../../assets/images/woorise-logo.svg";
import menuToggleData from "../../assets/data/togleMenuData";
import styles from "./header.module.css";

function Header() {
  const data = menuToggleData;

  return (
    <header className={styles.siteHeader}>
      <div className={styles.wrap}>
        <div className={styles.titleArea}>
          <Link to="/">
            <img src={logo} alt="Woorise logo" />
          </Link>
        </div>
        <button
          className={styles.menuToogle}
          aria-expanded={false}
          aria-pressed={false}
          role="button"
          id="mobile-genesis-nav-primary"
        ></button>
        <nav
          className={styles.navPrimary}
          aria-label="Main navigation"
          id="genesis-nav-primary"
        >
          <ul id="menu-main" className={styles.navMenu}>
            {data.map((item) => (
              <li key={item.id} id="menu-item-73" className={styles.menuItem}>
                <Link to="#">{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
