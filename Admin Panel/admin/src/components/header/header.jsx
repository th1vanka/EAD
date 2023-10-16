import React from 'react'
import styles from "./header.module.css";
import User from "../../images/user.png";

function Header() {
  return (
    <div className={styles["container"]}>
      <img src={User} alt="User" className={styles["profile-image"]} />
      <label className={styles["profile-label"]}>Hi, Thivanka</label>
    </div>
  );
}

export default Header