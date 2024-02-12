import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useClientContext } from "./clientContext";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
  const [editingContact, setEditingContact] = useState(null);
  const [search, setSearch] = useState("");

  const { contacts, setContacts, loadUser } = useClientContext();

  let contactsSearchResult = [];
  if (contacts) {
    contactsSearchResult = contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(search.toLowerCase()) ||
        contact.email.toLowerCase().includes(search.toLowerCase()) ||
        contact.phoneNumber.toLowerCase().includes(search.toLowerCase())
    );
  }

  const registerContactRequest = async (formData) => {
    try {
      const token = localStorage.getItem("@meusContatos:token");
      const { data } = await api.post("/contacts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      loadUser();
      toast.success("Contato cadastrado com sucesso 🎉");
    } catch (error) {
      console.log(error);
    }
  };

  const updateContactRequest = async (formData) => {
    try {
      const contactId = editingContact.id;
      const token = localStorage.getItem("@meusContatos:token");

      const { data } = await api.patch(`/contacts/${contactId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newContactsList = contacts.map((contact) => {
        if (contact.id === editingContact.id) {
          return data;
        } else {
          return contact;
        }
      });

      setContacts(newContactsList);
      loadUser();

      toast.success("Contato editado com sucesso 🎉");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContactRequest = async (deletingId) => {
    try {
      const token = localStorage.getItem("@meusContatos:token");

      const { data } = await api.delete(`/contacts/${deletingId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newContactsList = contacts.filter(
        (contact) => contact.id !== deletingId
      );

      setContacts(newContactsList);
      loadUser();
      toast.success("Contato deletado com sucesso 🎉");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        registerContactRequest,
        editingContact,
        setEditingContact,
        updateContactRequest,
        deleteContactRequest,
        search,
        setSearch,
        contactsSearchResult,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export const useContactContext = () => useContext(ContactContext);
