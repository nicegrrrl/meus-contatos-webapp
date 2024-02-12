import { DefaultTemplate } from "../DefaultTemplate/defaultTemplate";
import addContact from "../../assets/img/img-adicionar-contato.png";
import { Input } from "../../components/forms/Input/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerContactSchema } from "./registerContactSchema";
import styles from "./style.module.scss";
import { useContactContext } from "../../providers/contactContext";
import { useRef } from "react";
import { Link } from "react-router-dom";

export const CreateContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerContactSchema) });

  const { registerContactRequest } = useContactContext();

  const formRef = useRef(null);

  const submit = (formData) => {
    registerContactRequest(formData);
    formRef.current.reset();
  };

  return (
    <>
      <DefaultTemplate>
        <div className="container">
          <div className={styles.mainContent}>
            <div className={styles.textContent}>
              <h1 className="title-1 regular">adicionar contato</h1>
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
                    Adicionar contato
                  </button>
                  <Link to="/" className="buttonOutline">
                    Cancelar
                  </Link>
                </div>
              </form>
            </div>
            <div className={styles.imageBox}>
              <img
                src={addContact}
                className={styles.image}
                alt="adicionar contato"
              />
            </div>
          </div>
        </div>
      </DefaultTemplate>
    </>
  );
};
