import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Layout/Layout.module.scss";

const Layout = (props: any) => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main id={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
