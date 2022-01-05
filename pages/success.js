import { useEffect } from "react";
import Router from "next/router";
import CustomHead from "../components/Head";
import Layout from "../components/Layout";
import styles from "../styles/404/404.module.scss";

const FormSuccess = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      Router.push("/contact");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomHead
        title="Form Success | Steven Whitfield"
        description=""
        url="https://www.stevenwhitfield.live/success"
      />
      <Layout>
        <div className={styles.container}>
          <h1>Successfully sent.</h1>
        </div>
      </Layout>
    </>
  );
};

export default FormSuccess;
