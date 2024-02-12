import { useClientContext } from "../../providers/clientContext";
import { ContactReportCard } from "./ContactReportCard/contactReportCard";
import styles from "./style.module.scss";

export const ContactsReportList = () => {
  const { contacts } = useClientContext();
  return (
    <>
      {contacts.length > 0 ? (
        <ul className={styles.list}>
          {contacts.map((contact) => (
            <ContactReportCard key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : (
        <p>Não há contatos cadastrados.</p>
      )}
    </>
  );
};
