import { Footer } from "../../components/Footer/footer";
import { Header } from "../../components/Header/header";
import styles from "./style.module.scss";

export const DefaultTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};
