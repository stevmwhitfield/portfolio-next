import Image from "next/image";
import { PortableText } from "../lib/sanity";
import styles from "../styles/Card.module.scss";

const Card = ({ img, title, description, live, github }) => {
  return (
    <div className={styles.card}>
      <Image src={img} alt={title} layout="fill" />
      <div className={styles.content}>
        <h4>{title}</h4>
        <PortableText blocks={description} />
      </div>
      <div className={styles.buttons}>
        <a
          className={styles.btnSolid}
          style={live === "" ? { visibility: "hidden" } : null}
          href={live}
          target="_blank"
          rel="noreferrer"
        >
          Live Site
        </a>
        <a
          className={styles.btn}
          href={github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Card;
