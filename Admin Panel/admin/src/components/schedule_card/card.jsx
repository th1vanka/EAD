import React from "react";
import styles from "./card.module.css";
import TrainIcon from "@mui/icons-material/Train";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Switch from "../switch/switch";

function ScheduleCard({ active }) {
  const editHandler = () => {
    console.log("switch");
  };
  const onSwitchHandler = (id) => {
    console.log(id);
  };
  return (
    <div className={styles["container"]}>
      <div className={styles["profile-container"]}>
        <TrainIcon sx={{ fontSize: 30, color: "red" }} />
      </div>
      <div className={styles["detail-container"]}>
        <div className={styles["title-container"]}>
          <div className={styles["title"]}>Ruhunu Kumari</div>
        </div>
        <div className={styles["sub-titles-container"]}>
          <div className={styles["sub-title"]}>
            <span className={styles["prefix"]}>Ref: </span>102030
          </div>
          <div className={styles["sub-title"]}>
            <span className={styles["prefix"]}>From: </span>Colombo
          </div>
          <div className={styles["sub-title"]}>
            <span className={styles["prefix"]}>To: </span>Anuradhapura
          </div>
          <div className={styles["sub-title"]}>
            <span className={styles["prefix"]}>Arrive at: </span>
            13.15 PM
          </div>
          <div className={styles["sub-title"]}>
            <span className={styles["prefix"]}>Duration: </span>5 Hrs
          </div>
        </div>
      </div>
      <div className={styles["action-container"]}>
        <Switch active={active} onSwitch={onSwitchHandler} id={1} />
        <EditIcon sx={{ fontSize: 20, color: "red" }} onClick={editHandler} />
        <DeleteIcon sx={{ fontSize: 20, color: "red" }} onClick={editHandler} />
      </div>
    </div>
  );
}

export default ScheduleCard;
