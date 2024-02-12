import { useLocation } from "react-router-dom";
import { useClientContext } from "../../providers/clientContext";
import { useContactContext } from "../../providers/contactContext";
import { ContactCard } from "./ContactCard/contactCard";
import styles from "./style.module.scss";

export const ContactsList = () => {
  const { contacts } = useClientContext();
  const { contactsSearchResult } = useContactContext();

  const location = useLocation();

  const renderContacts =
    location.state?.context === "search" ? contactsSearchResult : contacts;

  return (
    <>
      {renderContacts.length > 0 ? (
        <ul className={styles.list}>
          {renderContacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : (
        <p>Não foram encontrados contatos.</p>
      )}
    </>
  );
};
