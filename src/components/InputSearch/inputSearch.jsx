import { forwardRef } from "react";
import { BsSearchHeart } from "react-icons/bs";
import styles from "./style.module.scss";

export const InputSearch = forwardRef(({ placeholder, ...rest }, ref) => {
  return (
    <>
      <div className={styles.inputBox}>
        <input
          type="text"
          className={styles.input}
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />
        <button type="submit">
          <BsSearchHeart className={styles.icon} />
        </button>
      </div>
    </>
  );
});
