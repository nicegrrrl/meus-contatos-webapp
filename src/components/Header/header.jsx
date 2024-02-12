import styles from "./style.module.scss";
import logo from "../../assets/img/logo.png";
import { InputSearch } from "../InputSearch/inputSearch";
import { LuUserCircle2 } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useContactContext } from "../../providers/contactContext";
import { useState } from "react";
import { useClientContext } from "../../providers/clientContext";

export const Header = () => {
  const [value, setValue] = useState("");

  const { handleLogoutButtonClick } = useClientContext();

  const { setSearch } = useContactContext();

  const navigate = useNavigate();

  const submit = (event) => {
    event.preventDefault();
    setSearch(value);
    setValue("");
    navigate("/contacts", { state: { context: "search"}});
  };

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContentBox}>
            <Link to="/">
              <img
                src={logo}
                alt="meus contatos logo"
                className={styles.logo}
              />
            </Link>
            <form onSubmit={submit}>
              <InputSearch
                placeholder="pesquisar contato"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </form>
            <div className={styles.buttons}>
              <Link to="/account" className={styles.buttonContent}>
                <LuUserCircle2 className="pink pointer" size={20} />
                <p className="text-4 pink uppercase bold pointer">conta</p>
              </Link>
              <div
                className={styles.buttonContent}
                onClick={() => handleLogoutButtonClick()}
              >
                <FiLogOut className="gray pointer" size={20} />
                <p className="text-4 gray uppercase bold pointer">sair</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
