import Layout from "../components/Layout";
import CustomHead from "../components/Head";
import Card from "../components/Card";
import { sanityClient, urlFor } from "../lib/sanity";
import styles from "../styles/Portfolio/Portfolio.module.scss";

const cardsQuery = `*[_type == "card"] | order(_createdAt) {
  _id,
  title,
  description,
  image,
  github,
  live,
}`;

const Portfolio = ({ cards }) => {
  return (
    <>
      <CustomHead
        title="Portfolio | Steven Whitfield"
        description="A collection of my works and projects."
        url="https://www.stevenwhitfield.live/portfolio"
      />
      <Layout>
        <div id={styles.portfolio}>
          <h1>Portfolio</h1>

          {/* CARDS */}
          <div className={styles.cards}>
            {cards.map(card => {
              return (
                <Card
                  key={card._id}
                  img={urlFor(card.image).url()}
                  title={card.title}
                  description={card.description}
                  live={card.live}
                  github={card.github}
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

export async function getStaticProps() {
  const cards = await sanityClient.fetch(cardsQuery);
  return { props: { cards } };
}
