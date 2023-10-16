import React from "react";
import styles from "./card.module.css";
import User from "../../images/passenger.jpg";
import Switch from "../switch/switch";

function PassengerCard({ active }) {
  const switchHandler = () => {
    console.log("switch");
  };
  return (
    <div className={styles["container"]}>
      <div className={styles["profile-container"]}>
        <img src={User} className={styles["profile-img"]} />
      </div>
      <div className={styles["detail-container"]}>
        <div className={styles["title"]}> Emma Johnson </div>
        <div className={styles["sub-detail-container"]}>
          <div className={styles["sub-text-container"]}>
            <label className={styles["sub-text"]}>
              <span className={styles["span-sub-text"]}> Ref: </span> 991481206V
            </label>
          </div>
          <div className={styles["sub-text-container"]}>
            <span className={styles["span-sub-text"]}> Contact: </span>
            <label className={styles["sub-text"]}>0178720021</label>
          </div>
          <div className={styles["sub-text-container"]}>
            <span className={styles["span-sub-text"]}> Status: </span>
            <label className={styles["sub-text"]}>Active</label>
          </div>
          <div className={styles["sub-text-container"]}>
            <span className={styles["span-sub-text"]}> Email: </span>
            <label className={styles["sub-text"]}>thivanka@gmail.com</label>
          </div>
        </div>
      </div>
      <div className={styles["action-container"]}>
        <Switch active={active} onSwitch={switchHandler} id={1} />
      </div>
    </div>
  );
}

export default PassengerCard;
