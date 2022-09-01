import Link from "next/link";
import Layout from "../components/Layout";
import CustomHead from "../components/Head";
import Card from "../components/Card";
import styles from "../styles/Home/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faSass,
  faReact,
  faJava,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { sanityClient, urlFor } from "../lib/sanity";
import { GetStaticProps } from "next";

const cardsQuery = `*[_type == "card"] | order(_createdAt) {
  _id,
  title,
  description,
  image,
  github,
  live,
}[0...3]`;

const Home = ({
  cards,
}: {
  cards: {
    _id: string;
    title: string;
    description: string;
    image: string;
    github: string;
    live: string;
  }[];
}) => {
  return (
    <>
      <CustomHead
        title="Steven Whitfield - Software Developer"
        description="Steven Whitfield is a software developer specializing in front-end web development."
        url="https://www.stevenwhitfield.live/"
      />
      <Layout>
        {/* HERO */}
        <section id={styles.hero}>
          <h1>Steven Whitfield</h1>
          <h3>
            &lt; <span>Software Developer</span> /&gt;
          </h3>
          <Link href="#featured">
            <a className={styles.button}>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ fontSize: "1.2rem" }}
              />
            </a>
          </Link>
        </section>

        {/* DIVIDER */}
        <div className={styles.divider}></div>

        {/* FEATURED WORK */}
        <div id="featured">
          <section id={styles.featured}>
            <h2>Featured Work</h2>
            <div className={styles.cards}>
              {cards.map(({ _id, image, title, description, live, github }) => {
                return (
                  <Card
                    key={_id}
                    img={urlFor(image).url()}
                    title={title}
                    description={description}
                    live={live}
                    github={github}
                  />
                );
              })}
            </div>
          </section>
        </div>

        {/* DIVIDER */}
        <div className={styles.divider}></div>

        {/* SKILLS */}
        <section id={styles.skills}>
          <h2>Skills</h2>
          <div className={styles.flex}>
            <article>
              <h3>Technical Skills</h3>
              <div className={styles.icons}>
                <span>
                  <FontAwesomeIcon icon={faHtml5} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faCss3Alt} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faJsSquare} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faSass} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faReact} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faJava} />
                </span>
              </div>
            </article>
            <article>
              <h3>Media Technology</h3>
              <div className={styles.icons}>
                <span>
                  <img
                    className={styles.icon}
                    src="https://res.cloudinary.com/dhzjdelhw/image/upload/v1633220823/Portfolio/AdobePhotoshopCC_icon_ns2qxz.svg"
                    alt="Adobe Photoshop icon"
                  />
                </span>
                <span>
                  <img
                    className={styles.icon}
                    src="https://res.cloudinary.com/dhzjdelhw/image/upload/v1633220823/Portfolio/AdobePremiereProCC_icon_axgcuv.svg"
                    alt="Adobe Premiere Pro icon"
                  />
                </span>
                <span>
                  <FontAwesomeIcon icon={faFigma} />
                </span>
              </div>
            </article>
          </div>
        </section>

        {/* DIVIDER */}
        <div className={styles.divider}></div>
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const cards = await sanityClient.fetch(cardsQuery);
  return { props: { cards } };
};
