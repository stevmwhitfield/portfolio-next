import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Layout/Footer.module.scss";

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <div className={styles.flexBetween}>
        <p>&copy; 2022 Steven Whitfield. All Rights Reserved.</p>
        <div className={styles.socialContainer}>
          <a href="https://github.com/stevmwhitfield">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/stevenmwhitfield/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
