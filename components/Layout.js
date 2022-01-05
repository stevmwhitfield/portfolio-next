import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Layout/Layout.module.scss";

const Layout = props => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main id={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
