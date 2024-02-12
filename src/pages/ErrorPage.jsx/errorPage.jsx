import { Link } from "react-router-dom";
import error from "../../assets/img/404-error.png";
import styles from "./style.module.scss";

export const ErrorPage = () => {
  return (
    <>
      <main className={styles.page}>
        <div className={styles.content}>
          <img src={error} alt="error 404 image" className={styles.errorImg} />
          <h1 className="title-1">página não encontrada</h1>
          <Link to="/" className="text-2 link">
            retornar para o início
          </Link>
        </div>
      </main>
    </>
  );
};
