import { useForm } from "react-hook-form";
import { Input } from "../../components/forms/Input/input";
import { InputPassword } from "../../components/forms/InputPassword/inputPassword";
import { Link } from "react-router-dom";
import { useClientContext } from "../../providers/clientContext";
import styles from "./style.module.scss";
import icon from "../../assets/img/icon.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerFormSchema) });

  const { clientRegisterRequest } = useClientContext();

  const submit = (formData) => {
    console.log(formData);
    clientRegisterRequest(formData);
  };

  return (
    <>
      <div className={`pageBox ${styles.page}`}>
        <div className="container small">
          <div className={styles.registerContentBox}>
            <div className={styles.registerTopBox}>
              <h1 className="title-2">Crie sua conta</h1>
              <img src={icon} alt="high five icon" className={styles.icon} />
            </div>
            <form className="form">
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
                required
                {...register("email")}
                error={errors.email}
              />
              <InputPassword
                label="Senha"
                id="password"
                required
                {...register("password")}
                error={errors.password}
              />
              <InputPassword
                label="Confirme a senha"
                id="confirmPassword"
                required
                {...register("confirmPassword")}
                error={errors.confirmPassword}
              />
              <Input
                label="Telefone"
                type="phone"
                id="phoneNumber"
                required
                {...register("phoneNumber")}
                error={errors.phoneNumber}
              />
              <div className={styles.buttons}>
                <button
                  type="submit"
                  onClick={handleSubmit(submit)}
                  className="buttonSolid"
                >
                  Criar conta
                </button>
                <Link to="/" className="buttonOutline">
                  Fazer login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
