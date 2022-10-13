import Layout from "../components/Layout";
import CustomHead from "../components/Head";
import Card from "../components/Card";
import { sanityClient, urlFor } from "../lib/sanity";
import styles from "../styles/Portfolio/Portfolio.module.scss";
import { GetStaticProps } from "next";

const cardsQuery = `*[_type == "card"] | order(_createdAt) {
  _id,
  title,
  description,
  image,
  github,
  live,
}`;

const Portfolio = ({
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
        title="Portfolio | Steven Whitfield"
        description="A collection of my works and projects."
        url="https://www.stevenwhitfield.dev/portfolio"
      />
      <Layout>
        <div id={styles.portfolio}>
          <h1>Portfolio</h1>

          {/* CARDS */}
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
        </div>

        {/* DIVIDER */}
        <div className={styles.divider}></div>
      </Layout>
    </>
  );
};

export default Portfolio;

export const getStaticProps: GetStaticProps = async () => {
  const cards = await sanityClient.fetch(cardsQuery);
  return { props: { cards } };
};
