import { ContactsList } from "../../components/ContactsList/contactsList";
import { DefaultTemplate } from "../DefaultTemplate/defaultTemplate";

export const ListContactsPage = () => {
  return (
    <>
      <DefaultTemplate>
        <div className="container">
          <ContactsList />
        </div>
      </DefaultTemplate>
    </>
  );
};
