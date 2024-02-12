import { DefaultTemplate } from "../DefaultTemplate/defaultTemplate";
import styles from "./style.module.scss";
import { Input } from "../../components/forms/Input/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useClientContext } from "../../providers/clientContext";
import updateAccount from "../../assets/img/img-editar-cliente.png";
import { registerContactSchema } from "../CreateContactPage/registerContactSchema";

export const UpdateAccountPage = () => {
  const { client, clientUpdateRequest } = useClientContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerContactSchema),
    values: {
      name: client.name,
      email: client.email,
      phoneNumber: client.phoneNumber,
    },
  });

  const formRef = useRef(null);

  const submit = (formData) => {
    clientUpdateRequest(formData);
  };

  return (
    <>
      <DefaultTemplate>
        <div className="container">
          <div className={styles.mainContent}>
            <div className={styles.textContent}>
              <h1 className="title-1 regular">editar conta</h1>
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
                    Editar
                  </button>
                  <Link to="/account" className="buttonOutline">
                    Cancelar
                  </Link>
                </div>
              </form>
            </div>
            <div className={styles.imageBox}>
              <div className={styles.imageBoxBg}>
                <img
                  src={updateAccount}
                  className={styles.image}
                  alt="editar conta"
                />
              </div>
            </div>
          </div>
        </div>
      </DefaultTemplate>
    </>
  );
};
