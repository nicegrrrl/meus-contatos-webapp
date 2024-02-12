import { forwardRef } from "react";
import styles from "./style.module.scss";

export const Input = forwardRef(({ label, id, error, ...rest }, ref) => {
  return (
    <>
      <div className={styles.inputBox}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <input className={styles.input} id={id} ref={ref} {...rest} />
        {error ? <p className="error">{error.message}</p> : null}
      </div>
    </>
  );
});
