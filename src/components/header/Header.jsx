/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/woorise-logo.svg";
import menuToggleData from "../../assets/data/togleMenuData";
import styles from "./header.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <img src={logo} alt="Woorise Logo" />
      </Link>
    </div>
  );
}

function ToggleBtn({ handleClick }) {
  return (
    <button
      className={styles.menuToggle}
      aria-expanded={false}
      aria-pressed={false}
      role="button"
      onClick={handleClick}
    >
      <span className={styles.toggleLine}></span>
    </button>
  );
}

// eslint-disable-next-line react/prop-types
function Nav({ data, navOpen }) {
  return (
    <nav className={styles.navContainer} aria-label="Main navigation">
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
  );
}

function Header() {
  const data = menuToggleData;
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header
      className={`${styles.siteHeader} ${navOpen ? styles.headerOpen : ""}`}
    >
      <Logo />
      <ToggleBtn handleClick={() => setNavOpen(!navOpen)} />
      <Nav data={data} navOpen={navOpen} />
    </header>
  );
}

export default Header;
