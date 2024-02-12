import { useClientContext } from "../../providers/clientContext";
import { DefaultTemplate } from "../DefaultTemplate/defaultTemplate";
import styles from "./styles.module.scss";
import clientImage from "../../assets/img/img-cliente.png";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

export const AccountPage = () => {
  const { client } = useClientContext();

  return (
    <>
      <DefaultTemplate>
        <div className="container">
          <div className={styles.mainContent}>
            <div className={styles.textContent}>
              <h1 className="title-1 regular">{client.name.toLowerCase()}</h1>
              <div className={styles.info}>
                <AiOutlineMail size={15} className="gray" />
                <p>{client.email}</p>
              </div>
              <div className={styles.info}>
                <FiPhone size={15} className="gray" />
                <p>{client.phoneNumber}</p>
              </div>
              <div className={styles.buttons}>
                <Link
                  to="/update-account"
                  className={`buttonSolid ${styles.button}`}
                >
                  Editar conta
                </Link>
                <Link to="/delete-account" className="buttonDanger">
                  Excluir
                </Link>
              </div>
            </div>
            <div className={styles.imageBox}>
              <div className={styles.imageBoxBg}>
                <img
                  src={clientImage}
                  className={styles.image}
                  alt="editar conta"
                />
              </div>
            </div>
          </div>
        </div>
      </DefaultTemplate>
    </>
  );
};
