import { useClientContext } from "../../providers/clientContext";
import { DefaultTemplate } from "../DefaultTemplate/defaultTemplate";
import { ContactsReportList } from "../../components/ContactsReportList/contactsReportList";
import styles from "./style.module.scss";
import { GiPlainCircle } from "react-icons/gi";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { usePDF } from "react-to-pdf";
import generatePDF, { Resolution, Margin } from "react-to-pdf";

export const ReportPage = () => {
  const { client } = useClientContext();

  const { targetRef } = usePDF();

  const options = {
    resolution: Resolution.HIGH,
    page: {
      margin: Margin.LARGE,
      format: "A4",
      orientation: "portrait",
    },
    filename: "report.pdf",
  };

  return (
    <>
      <DefaultTemplate>
        <div className="container">
          <div className={styles.mainContent}>
            <div className={styles.reportInfos} ref={targetRef}>
              <div className={styles.client}>
                <h1>{client.name.toLowerCase()}</h1>
                <div className={styles.clientInfos}>
                  <AiOutlineMail size={15} className="gray" />
                  <p>{client.email.toLowerCase()}</p>
                  <GiPlainCircle className="yellow" size={15} />
                  <FiPhone size={15} className="gray" />
                  <p>{client.phoneNumber.toLowerCase()}</p>
                </div>
              </div>
              <div className={styles.contacts}>
                <h2 className="title-2">contatos</h2>
                <p>total: {client.contacts.length} contatos</p>
                <ContactsReportList />
              </div>
            </div>
            <button
              className="buttonSolid"
              onClick={() => generatePDF(targetRef, options)}
            >
              Exportar pdf
            </button>
          </div>
        </div>
      </DefaultTemplate>
    </>
  );
};
