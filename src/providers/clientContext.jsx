import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const ClientContext = createContext({});

export const ClientProvider = ({ children }) => {
  const [client, setClient] = useState(null);
  const [contacts, setContacts] = useState(null);
  const pathname = window.location.pathname;

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@meusContatos:token");

    if (token) {
      loadUser();
      navigate(pathname);
    }
  }, []);

  const loadUser = async () => {
    const token = localStorage.getItem("@meusContatos:token");
    try {
      const { data } = await api.get("/clients/logged", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setClient(data);
      setContacts(data.contacts);
    } catch (error) {
      console.log(error);
      localStorage.removeItem("@meusContatos:token");
    }
  };

  const clientLoginRequest = async (formData) => {
    try {
      const { data } = await api.post("/login", formData);
      localStorage.setItem("@meusContatos:token", data.token);
      await loadUser();
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      if (error.response?.data.message === "Invalid email or password") {
        toast.error("Email ou senha não correspondem 😅");
      }
    }
  };

  const clientRegisterRequest = async (formData) => {
    try {
      const { data } = await api.post("/clients", formData);
      navigate("/");
      toast.success("Cadastro realizado com sucesso 🎉");
    } catch (error) {
      if (error.response?.data.message === "Email already exists") {
        toast.error("O email já está usando usado por outro cliente 😅");
      }
    }
  };

  const clientUpdateRequest = async (formData) => {
    try {
      const token = localStorage.getItem("@meusContatos:token");
      const clientId = client.id;

      const { data } = await api.patch(`/clients/${clientId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setClient({ ...client, ...data });
      navigate("/account");
      toast.success("Sua conta foi editada com sucesso 🎉");
    } catch (error) {
      if (error.response?.data.message === "Internal Server Error") {
        toast.error("O email já está usando usado por outro cliente 😅");
      }
      console.log(error);
    }
  };

  const clientDeleteRequest = async () => {
    try {
      const token = localStorage.getItem("@meusContatos:token");
      const clientId = client.id;

      const { data } = await api.delete(`/clients/${clientId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Sua conta foi deletada com sucesso 👋🏻");
      handleLogoutButtonClick();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogoutButtonClick = () => {
    const token = localStorage.removeItem("@meusContatos:token");
    setClient(null);
    navigate("/");
  };

  return (
    <ClientContext.Provider
      value={{
        clientLoginRequest,
        clientRegisterRequest,
        client,
        contacts,
        setContacts,
        handleLogoutButtonClick,
        clientUpdateRequest,
        clientDeleteRequest,
        loadUser,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export const useClientContext = () => useContext(ClientContext);
