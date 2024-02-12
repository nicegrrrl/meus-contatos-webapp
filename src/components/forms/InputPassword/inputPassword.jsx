import { forwardRef, useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import styles from "./style.module.scss";

export const InputPassword = forwardRef(({ label, id, error, ...rest }, ref) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
      <div className={styles.inputBox}>
        <div>
          <label className={styles.label} htmlFor="">
            {label}
          </label>
          <div className={styles.inputPassword}>
            <input
              type={isHidden ? "password" : "text"}
              className={styles.input}
              ref={ref}
              {...rest}
            />
            <button type="button" onClick={() => setIsHidden(!isHidden)}>
              {isHidden ? <MdVisibility /> : <MdVisibilityOff />}
            </button>
          </div>
        </div>
        {error ? <p className="error">{error.message}</p> : null}
      </div>
    </>
  );
});
