import React from "react";
import styles from "./select.module.css";

function Select({ label, required, options = [],placeholder }) {
  return (
    <div className={styles["container"]}>
      <label className={styles["label"]}>
        {label}
        <span className={styles["star"]}>{required && "*"}</span>
      </label>
      <select className={styles["input"]}>
        <option value={null} className={styles["select-placeholder"]}>
          {placeholder}
        </option>
        {options.map((item, index) => (
          <option value={item.id} key={index}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
