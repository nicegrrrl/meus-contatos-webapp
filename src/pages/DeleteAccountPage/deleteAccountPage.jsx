import { useClientContext } from "../../providers/clientContext";
import { DefaultTemplate } from "../DefaultTemplate/defaultTemplate";
import styles from "./style.module.scss";
import deleteAccountImage from "../../assets/img/img-excluir-conta.png";
import { Link } from "react-router-dom";

export const DeleteAccountPage = () => {
  const { client, clientDeleteRequest } = useClientContext();

  return (
    <>
      <DefaultTemplate>
        <div className="container">
          <div className={styles.mainContent}>
            <div className={styles.textContent}>
              <h1 className="title-1 regular center">
                você realmente deseja excluir sua conta?
              </h1>

              <div className={styles.buttons}>
                <button
                  className="buttonDanger"
                  onClick={() => clientDeleteRequest()}
                >
                  Excluir
                </button>
                <Link
                  to="/account"
                  className={`buttonOutline ${styles.button}`}
                >
                  Cancelar
                </Link>
              </div>
            </div>
            <div className={styles.imageBox}>
              <div className={styles.imageBoxBg}>
                <img
                  src={deleteAccountImage}
                  className={styles.image}
                  alt="deletar conta"
                />
              </div>
            </div>
          </div>
        </div>
      </DefaultTemplate>
    </>
  );
};
