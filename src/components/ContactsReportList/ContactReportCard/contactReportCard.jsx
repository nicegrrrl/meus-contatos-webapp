import styles from "./style.module.scss";
import { FaStarOfLife } from "react-icons/fa6";
import { GiPlainCircle } from "react-icons/gi";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

export const ContactReportCard = ({ contact }) => {
  return (
    <>
      <li className={styles.card}>
        <div className={styles.name}>
          <FaStarOfLife className="pink" size={17} />
          <p className="text-1 bold">{contact.name}</p>
        </div>
        <div className={styles.infos}>
          <AiOutlineMail size={15} className="gray" />
          <p className="text-3">{contact.email}</p>
          <GiPlainCircle className="yellow" size={11} />
          <FiPhone size={15} className="gray" />
          <p className="text-3">{contact.phoneNumber}</p>
        </div>
      </li>
    </>
  );
};
