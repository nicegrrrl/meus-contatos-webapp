import { Link } from "react-router-dom";
import { Input } from "../../components/forms/Input/input";
import login from "../../assets/img/login.png";
import { useForm } from "react-hook-form";
import { useClientContext } from "../../providers/clientContext";
import styles from "./style.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import logo from "../../assets/img/logo.png";

export const LoginPage = () => {
  const { clientLoginRequest } = useClientContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginFormSchema) });

  const submit = (formData) => {
    clientLoginRequest(formData);
  };

  return (
    <>
      <main className={`pageBox ${styles.page}`}>
        <div className="container">
          <div className={styles.loginContentBox}>
            <div className={styles.loginContent}>
              <div className={styles.logoDescription}>
                <div>
                  <img
                    src={logo}
                    alt="meus contatos logo"
                    className={styles.logo}
                  />
                </div>
                <p className="text-2">
                  A sua agenda de contatos na palma da mão
                </p>
              </div>
              <form onSubmit={handleSubmit(submit)} className="form">
                <Input
                  label="Email"
                  type="email"
                  id="email"
                  // required
                  {...register("email")}
                  error={errors.email}
                />
                <Input
                  label="Password"
                  type="password"
                  id="password"
                  // required
                  {...register("password")}
                  error={errors.password}
                />
                <Link to="/register" className="link text-2">
                  Não tem cadastro? Faça uma conta
                </Link>
                <button type="submit" className="buttonSolid">
                  Entrar
                </button>
              </form>
            </div>
            <div className={styles.mainImage}>
              <img src={login} alt="login image" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
