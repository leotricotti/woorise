import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../../assets/images/woorise-logo.svg";
import menuToggleData from "../../assets/data/togleMenuData";
import styles from "./header.module.css";

ToggleBtn.propTypes = {
  handleClick: PropTypes.func,
};

Nav.propTypes = {
  data: PropTypes.array,
  navOpen: PropTypes.bool,
  scrollColor: PropTypes.bool,
  setNavOpen: PropTypes.func,
};

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

function Nav({ data, navOpen, setNavOpen, scrollColor }) {
  return (
    <nav className={styles.navContainer} aria-label="Main navigation">
      <ul
        id="menu-main"
        className={`${styles.navMenu} ${navOpen ? styles.navOpen : ""}`}
      >
        {data.map((item) => (
          <li
            key={item.id}
            className={`${styles.menuItem} ${
              scrollColor ? styles.isActive : ""
            }`}
          >
            <Link
              to={item.link}
              target="_blank"
              onClick={() => setNavOpen(false)}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Header() {
  const data = menuToggleData;
  const [navOpen, setNavOpen] = useState(false);
  const [scrollColor, setScrollColor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      const triggerHeight = 75;

      if (scrollHeight > triggerHeight) {
        setScrollColor(true);
      } else {
        setScrollColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.siteHeader} ${navOpen ? styles.headerOpen : ""}`}
    >
      <Logo />
      <ToggleBtn handleClick={() => setNavOpen(!navOpen)} />
      <Nav
        data={data}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        scrollColor={scrollColor}
      />
    </header>
  );
}

export default Header;
