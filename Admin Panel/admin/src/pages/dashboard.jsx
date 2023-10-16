import React from "react";
import styles from "../styles/dashboard.module.css";
import TrainIcon from "@mui/icons-material/Train";
import GroupIcon from "@mui/icons-material/Group";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import BookingChart from "../components/chart/chart";
function Dashboard() {
  return (
    <div className={styles["container"]}>
      <div className={styles["header-container"]}>
        <div className={styles["header-section"]}>
          <TrainIcon sx={{ color: "var(--primary)", fontSize: 35 }} />
          <div className={styles["header-detail-section"]}>
            <label className={styles["header-title"]}>Train Count</label>
            <label className={styles["header-label"]}>03</label>
          </div>
        </div>
        <div className={styles["header-section"]}>
          <GroupIcon sx={{ color: "var(--primary)", fontSize: 40 }} />
          <div className={styles["header-detail-section"]}>
            <label className={styles["header-title"]}>Passenger Count</label>
            <label className={styles["header-label"]}>03</label>
          </div>
        </div>

        <div className={styles["header-section"]}>
          <CalendarMonthIcon sx={{ color: "var(--primary)", fontSize: 35 }} />
          <div className={styles["header-detail-section"]}>
            <label className={styles["header-title"]}>Total Bookings</label>
            <label className={styles["header-label"]}>03</label>
          </div>
        </div>
        <div className={styles["header-section"]}>
          <AccessTimeOutlinedIcon
            sx={{ color: "var(--primary)", fontSize: 35 }}
          />
          <div className={styles["header-detail-section"]}>
            <label className={styles["header-title"]}>Total Schedules</label>
            <label className={styles["header-label"]}>03</label>
          </div>
        </div>
        <div className={styles["header-section"]}>
          <SupervisorAccountIcon
            sx={{ color: "var(--primary)", fontSize: 40 }}
          />
          <div className={styles["header-detail-section"]}>
            <label className={styles["header-title"]}>User Count</label>
            <label className={styles["header-label"]}>03</label>
          </div>
        </div>
      </div>
      <div className={styles["chart-container"]}>
        <BookingChart />
      </div>
    </div>
  );
}

export default Dashboard;
