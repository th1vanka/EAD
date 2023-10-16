import React from "react";
import styles from "./card.module.css";
import User from "../../images/passenger.jpg";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function CanceledBookingCard({ active }) {
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
            <div className={styles["title"]}>Thiloka Saumya</div>
          </div>
          <div className={styles["sub-titles-container"]}>
            <div className={styles["sub-title"]}>
              <span className={styles["prefix"]}>Ref: </span>102030
            </div>
            <div className={styles["sub-title"]}>
              <span className={styles["prefix"]}>Contact: </span>0718720021
            </div>
            <div className={styles["sub-title"]}>
              <span className={styles["prefix"]}>NIC: </span>991485264V
            </div>
            <div className={styles["sub-title"]}>
              <span className={styles["prefix"]}>Booking Date: </span>
              2023.10.28
            </div>
          </div>
        </div>
        <div className={styles["action-container"]}>
          <div className={styles["action-status-container"]}>
            <FiberManualRecordIcon sx={{ color: "red" }} />
            <label className={styles["action-status-label"]}>Canceled</label>
          </div>
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
            <span className={styles["prefix"]}>Train: </span>Ruhunu Kumari
          </div>
          <div className={styles["sub-title2"]}>
            <span className={styles["prefix"]}>Train Ref: </span>105030
          </div>
          <div className={styles["sub-title2"]}>
            <span className={styles["prefix"]}>Seat Count: </span>5
          </div>
          <div className={styles["sub-title2"]}>
            <span className={styles["prefix"]}>Amount (Rs): </span>1000.00
          </div>
          <div className={styles["sub-title2"]}>
            <span className={styles["prefix"]}> Reserved Date: </span>2023.10.05
          </div>
        </div>
      </div>
    </>
  );
}

export default CanceledBookingCard;
