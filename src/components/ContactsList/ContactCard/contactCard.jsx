import { FiEdit2, FiTrash2, FiPhone } from "react-icons/fi";
import styles from "./style.module.scss";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContactContext } from "../../../providers/contactContext";

export const ContactCard = ({ contact }) => {
  const { setEditingContact, deleteContactRequest } = useContactContext();

  const handleUpdateClick = (contact) => {
    setEditingContact(contact);
  };

  const handleDeleteClick = (contact) => {
    deleteContactRequest(contact.id);
  };

  return (
    <>
      <li className={styles.card}>
        <div className={styles.textContent}>
          <div>
            <h3 className="text-2 bold black">{contact.name}</h3>
          </div>
          <div>
            <div className={styles.contactInfo}>
              <AiOutlineMail size={15} className={styles.contactInfoIcon} />
              <p className="text-3 black">{contact.email}</p>
            </div>

            <div className={styles.contactInfo}>
              <FiPhone size={15} className={styles.contactInfoIcon} />
              <p className="text-3 black">{contact.phoneNumber}</p>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link
            to="/update-contact"
            aria-label="editar contato"
            className="link"
            onClick={() => {
              handleUpdateClick(contact);
            }}
          >
            <FiEdit2 size={15} className={styles.button} />
          </Link>
          <button
            aria-label="deletar contato"
            onClick={() => handleDeleteClick(contact)}
          >
            <FiTrash2 size={15} className={styles.button} />
          </button>
        </div>
      </li>
    </>
  );
};
