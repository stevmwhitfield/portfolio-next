import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFolderOpen,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Layout/Header.module.scss";

const Header = () => {
  const router = useRouter();

  return (
    <header id={styles.header}>
      <nav id={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" passHref>
              <a
                className={
                  router.pathname === "/"
                    ? `${styles.navLink} ${styles.active}`
                    : `${styles.navLink}`
                }
              >
                <FontAwesomeIcon icon={faHome} />
                Home
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/portfolio" passHref>
              <a
                className={
                  router.pathname === "/portfolio"
                    ? `${styles.navLink} ${styles.active}`
                    : `${styles.navLink}`
                }
              >
                <FontAwesomeIcon icon={faFolderOpen} />
                Portfolio
              </a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" passHref>
              <a
                className={
                  router.pathname === "/contact"
                    ? `${styles.navLink} ${styles.active}`
                    : `${styles.navLink}`
                }
              >
                <FontAwesomeIcon icon={faEnvelope} />
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <a
        className={styles.btn}
        href="https://www.linkedin.com/in/stevenmwhitfield"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>
      <a
        className={`${styles.btn} ${styles.btnSolid}`}
        href="https://github.com/stevmwhitfield"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </header>
  );
};

export default Header;
