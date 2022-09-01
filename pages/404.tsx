import Link from "next/link";
import CustomHead from "../components/Head";
import Layout from "../components/Layout";
import styles from "../styles/404/404.module.scss";

const PageNotFound = () => {
  return (
    <>
      <CustomHead
        title="Page Not Found | Steven Whitfield"
        description="Error 404: Page not found."
        url="https://www.stevenwhitfield.live/404"
      />
      <Layout>
        <div className={styles.container}>
          <h1>Error 404</h1>
          <h3>Page not found.</h3>
          <Link href="/">
            <a>Return to home</a>
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default PageNotFound;
