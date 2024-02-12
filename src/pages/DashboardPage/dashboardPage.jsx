import { DefaultTemplate } from "../DefaultTemplate/defaultTemplate";
import styles from "./style.module.scss";
import addContact from "../../assets/img/img-adicionar-contato.png";
import listContacts from "../../assets/img/img-ver-todos-os-contatos.png";
import createReport from "../../assets/img/img-gerar-relatorio.png";
import { useClientContext } from "../../providers/clientContext";
import { Link } from "react-router-dom";

export const DashboardPage = () => {
  const { client } = useClientContext();

  return (
    <>
      <DefaultTemplate>
        <div className="container">
          <div className={styles.mainContentBox}>
            <div className={styles.mainContent}>
              <div className={styles.mainHeader}>
                <div className={styles.headerText}>
                  <h1 className="title-1">{client.name.toLowerCase()}</h1>
                  <p className="text-1">o que deseja fazer?</p>
                </div>
                <div className={styles.totalContacts}>
                  <span className={styles.number}>
                    {client.contacts.length}
                  </span>
                  <span className="text-2">contatos</span>
                </div>
              </div>
              <div className={styles.actions}>
                <Link to="/create-contact" className={styles.addContact}>
                  <img src={addContact} alt="" />
                  <p className="text-3 bold link">adicionar contatos</p>
                </Link>
                <Link to="/contacts" className={styles.listContacts}>
                  <img src={listContacts} alt="" />
                  <p className="text-3 bold link">ver todos os contatos</p>
                </Link>
                <Link to="/report" className={styles.createReport}>
                  <img src={createReport} alt="" />
                  <p className="text-3 bold link">gerar relatório</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </DefaultTemplate>
    </>
  );
};
