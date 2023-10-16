import React from "react";
import styles from "./select.module.css";

function Select({ label, required, options = [], placeholder, onChangeText }) {
  return (
    <div className={styles["container"]}>
      <label className={styles["label"]}>
        {label}
        <span className={styles["star"]}>{required && "*"}</span>
      </label>
      <select
        className={styles["input"]}
        onChange={(e) => {
          onChangeText(e);
        }}
      >
        <option value={null} className={styles["select-placeholder"]}>
          {placeholder}
        </option>
        {options.map((item, index) => (
          <option value={item.name}  key={index}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
