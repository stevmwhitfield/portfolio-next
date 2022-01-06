import { useState, useEffect } from "react";
import Router from "next/router";
import CustomHead from "../components/Head";
import Layout from "../components/Layout";
import styles from "../styles/404/404.module.scss";

const FormSuccess = () => {
  const [time, setTime] = useState(3);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => {
      clearInterval(countdown);
    };
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      Router.push("/contact");
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
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
          <h1>Successfully Sent</h1>
          <p>Returning to contact page in {time} seconds...</p>
        </div>
      </Layout>
    </>
  );
};

export default FormSuccess;
