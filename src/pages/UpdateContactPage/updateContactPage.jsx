import { useForm } from "react-hook-form";
import { useContactContext } from "../../providers/contactContext";
import { DefaultTemplate } from "../DefaultTemplate/defaultTemplate";
import styles from "./style.module.scss";
import { useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/forms/Input/input";
import { Link, useNavigate } from "react-router-dom";
import { registerContactSchema } from "../CreateContactPage/registerContactSchema";
import updateContact from "../../assets/img/img-editar-contato.png";

export const UpdateContactPage = () => {
  const { editingContact, updateContactRequest } = useContactContext();

  const formRef = useRef(null);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      name: editingContact.name,
      email: editingContact.email,
      phoneNumber: editingContact.phoneNumber,
    },
    resolver: zodResolver(registerContactSchema),
  });

  const submit = (formData) => {
    updateContactRequest(formData);
    navigate("/contacts");
  };

  return (
    <DefaultTemplate>
      <div className="container">
        <div className={styles.mainContent}>
          <div className={styles.textContent}>
            <h1 className="title-1 regular">editar contato</h1>
            <form
              onSubmit={handleSubmit(submit)}
              className="form"
              ref={formRef}
            >
              <Input
                label="Nome"
                type="text"
                id="name"
                {...register("name")}
                error={errors.name}
              />
              <Input
                label="Email"
                type="email"
                id="email"
                {...register("email")}
                error={errors.email}
              />
              <Input
                label="Telefone"
                type="phone"
                id="phoneNumber"
                {...register("phoneNumber")}
                error={errors.phoneNumber}
              />
              <div className={styles.buttons}>
                <button
                  type="submit"
                  className={`buttonSolid ${styles.button}`}
                >
                  Editar contato
                </button>
                <Link to="/contacts" className="buttonOutline">
                  Cancelar
                </Link>
              </div>
            </form>
          </div>
          <div className={styles.imageBox}>
            <img
              src={updateContact}
              className={styles.image}
              alt="editar contato"
            />
          </div>
        </div>
      </div>
    </DefaultTemplate>
  );
};
