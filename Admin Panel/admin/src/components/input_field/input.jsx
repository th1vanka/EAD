import React from "react";
import styles from "./input.module.css";

function Input({ label, type, placeholder, required }) {
  return (
    <div className={styles["container"]}>
      <label className={styles["label"]}>
        {label}
        <span className={styles["star"]}>{required && "*"}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={styles["input"]}
      />
    </div>
  );
}

export default Input;
