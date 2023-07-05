import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <ul className={styles.nav}>
        <li className={styles.nav__item}>
          <Link to="/" className={styles.nav__item}>
            Global
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="/covid/indonesia" className={styles.nav__item}>
            Indonesia
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="/covid/provinsi" className={styles.nav__item}>
            Provinsi
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link to="/covid/about" className={styles.nav__item}>
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
