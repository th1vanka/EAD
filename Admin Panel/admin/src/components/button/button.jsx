import React from "react";
import styles from "./button.module.css";

function Button({ text,clickHandler }) {
  return (
    <div className={styles["container"]} onClick={clickHandler}>
      {!text ? "Button" : text}
    </div>
  );
}

export default Button;
