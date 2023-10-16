import React from "react";
import styles from "./card.module.css";
import TrainIcon from "@mui/icons-material/Train";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Switch from "../switch/switch";
import axios from "axios";

function ScheduleCard({ active, name, no, from, to, arrive, duration }) {
  const editHandler = () => {};
  const onSwitchHandler = (id) => {
    const data = {
      trainName: name,
      start: from,
      end: to,
      startTime: arrive,
      duration: duration,
      isActive: !active,
    };
    axios
      .put(`http://localhost:5053/api/trainShedules/${no}`, data)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className={styles["container"]}>
      <div className={styles["profile-container"]}>
        <TrainIcon sx={{ fontSize: 30, color: "red" }} />
      </div>
      <div className={styles["detail-container"]}>
        <div className={styles["title-container"]}>
          <div className={styles["title"]}>{name}</div>
        </div>
        <div className={styles["sub-titles-container"]}>
          <div className={styles["sub-title"]}>
            <span className={styles["prefix"]}>Ref: </span>
            {no.slice(0, 10)}
          </div>
          <div className={styles["sub-title"]}>
            <span className={styles["prefix"]}>From: </span>
            {from}
          </div>
          <div className={styles["sub-title"]}>
            <span className={styles["prefix"]}>To: </span>
            {to}
          </div>
          <div className={styles["sub-title"]}>
            <span className={styles["prefix"]}>Arrive at: </span>
            {arrive.split("T")[1]}
          </div>
          <div className={styles["sub-title"]}>
            <span className={styles["prefix"]}>Duration: </span>
            {duration} Hrs
          </div>
        </div>
      </div>
      <div className={styles["action-container"]}>
        <Switch active={active} onSwitch={onSwitchHandler} id={no} />
        <EditIcon sx={{ fontSize: 20, color: "red" }} onClick={editHandler} />
        {/* <DeleteIcon sx={{ fontSize: 20, color: "red" }} onClick={editHandler} /> */}
      </div>
    </div>
  );
}

export default ScheduleCard;
