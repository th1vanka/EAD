import React from "react";
import styles from "./card.module.css";
import User from "../../images/passenger.jpg";
 import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import EditIcon from "@mui/icons-material/Edit";

function UserCard({ active }) {
  const editHandler = () => {
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
          <div className={styles["sub-text-container2"]}>
            <label className={styles["sub-text"]}>
              <span className={styles["span-sub-text"]}> NIC: </span> 991481206V
            </label>
          </div>
          <div className={styles["sub-text-container2"]}>
            <span className={styles["span-sub-text"]}> Contact: </span>
            <label className={styles["sub-text"]}>0178720021</label>
          </div>
          <div className={styles["sub-text-container2"]}>
            <span className={styles["span-sub-text"]}> Status: </span>
            <label className={styles["sub-text"]}>Active</label>
          </div>
          <div className={styles["sub-text-container"]}>
            <span className={styles["span-sub-text"]}> Email: </span>
            <label className={styles["sub-text"]}>thivanka@gmail.com</label>
          </div>
          <div className={styles["sub-text-container2"]}>
            <span className={styles["span-sub-text"]}> Role: </span>
            <label className={styles["sub-text"]}>Back Officer</label>
          </div>
        </div>
      </div>
      <div className={styles["action-container"]}>
        <EditIcon sx={{ fontSize: 20, color: "red" }} onClick={editHandler} />
        <PersonRemoveIcon
          sx={{ fontSize: 20, color: "red" }}
          onClick={editHandler}
        />
      </div>
    </div>
  );
}

export default UserCard;
