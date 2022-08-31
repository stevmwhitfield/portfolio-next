import Layout from "../components/Layout";
import CustomHead from "../components/Head";
import styles from "../styles/Contact/Contact.module.scss";
import Form from "../components/Form";

const Contact = () => {
  return (
    <>
      <CustomHead
        title="Contact Me | Steven Whitfield"
        description="Get in touch."
        url="https://www.stevenwhitfield.live/contact"
      />
      <Layout>
        <div id={styles.contact}>
          <h1>Let&apos;s Talk</h1>

          {/* FORM */}
          <Form />
        </div>

        {/* DIVIDER */}
        <div className={styles.divider}></div>
      </Layout>
    </>
  );
};

export default Contact;
