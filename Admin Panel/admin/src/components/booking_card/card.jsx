import React from "react";
import styles from "./card.module.css";
import User from "../../images/passenger.jpg";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function BookingCard({
  active,
  name,
  no,
  mob,
  nic,
  booking,
  train,
  train_ref,
  seat,
  train_class,
}) {
  const [isMoreActive, setMoreActive] = React.useState(false);

  const editHandler = () => {
    console.log("switch");
  };
  const moreHandler = () => {
    setMoreActive(!isMoreActive);
  };

  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["profile-container"]}>
          <img src={User} className={styles["profile-img"]} />
        </div>
        <div className={styles["detail-container"]}>
          <div className={styles["title-container"]}>
            <div className={styles["title"]}>{name}</div>
          </div>
          <div className={styles["sub-titles-container"]}>
            <div className={styles["sub-title"]}>
              <span className={styles["prefix"]}>Ref: </span>
              {no}
            </div>
            <div className={styles["sub-title"]}>
              <span className={styles["prefix"]}>Contact: </span>
              {mob}
            </div>
            <div className={styles["sub-title"]}>
              <span className={styles["prefix"]}>NIC: </span>
              {nic}
            </div>
            <div className={styles["sub-title"]}>
              <span className={styles["prefix"]}>Booking Date: </span>
              {booking.split("T")[1]}
            </div>
          </div>
        </div>
        <div className={styles["action-container"]}>
          <EditIcon sx={{ fontSize: 20, color: "red" }} onClick={editHandler} />
          <CancelIcon
            sx={{ fontSize: 20, color: "red" }}
            onClick={editHandler}
          />
          {isMoreActive ? (
            <ExpandMoreIcon
              sx={{ fontSize: 28, color: "red", cursor: "pointer" }}
              onClick={moreHandler}
            />
          ) : (
            <ExpandLessIcon
              sx={{ fontSize: 28, color: "red", cursor: "pointer" }}
              onClick={moreHandler}
            />
          )}
        </div>
      </div>
      <div
        className={styles["sub-container"]}
        id={isMoreActive && styles.container_active}
      >
        <div className={styles["profile-container"]}>
          <CalendarMonthIcon sx={{ fontSize: 30, color: "red" }} />
        </div>
        <div className={styles["user-details-container"]}>
          <div className={styles["sub-title2"]}>
            <span className={styles["prefix"]}>Train: </span>
            {train}
          </div>
          <div className={styles["sub-title2"]}>
            <span className={styles["prefix"]}>Train Ref: </span>
            {train_ref}
          </div>
          <div className={styles["sub-title2"]}>
            <span className={styles["prefix"]}>Seat Count: </span>
            {seat}
          </div>
          <div className={styles["sub-title2"]}>
            <span className={styles["prefix"]}>Amount (Rs): </span>
            {train_class === "1" ? seat * 50 :train_class === "2" ? seat * 30: train_class === "2" && seat * 20}.00
          </div>
          <div className={styles["sub-title2"]}>
            <span className={styles["prefix"]}> Reserved Date: </span>
            {booking.split("T")[1]}
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingCard;
