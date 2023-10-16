import React from "react";
import styles from "./card.module.css";
import TrainIcon from "@mui/icons-material/Train";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Switch from "../switch/switch";

function TrainCard({ active ,name,no,start,end}) {
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
        <div className={styles["title"]}>{name}</div>
        <div className={styles["sub-title2"]}>
          <span className={styles["prefix"]}>No: </span>
          {no}
        </div>
        <div className={styles["sub-title"]}>
          <span className={styles["prefix"]}>Start: </span>{start}
        </div>
        <div className={styles["sub-title"]}>
          <span className={styles["prefix"]}>End: </span>{end}
        </div>
        <div className={styles["sub-title2"]}>
          <span className={styles["prefix"]}>Status: </span>
          {active===true ? "Running" : "Stopped"}
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

export default TrainCard;
