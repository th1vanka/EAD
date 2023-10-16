import React from "react";
import styles from "../styles/dashboard.module.css";
import TrainIcon from "@mui/icons-material/Train";
import GroupIcon from "@mui/icons-material/Group";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import BookingChart from "../components/chart/chart";
import axios from 'axios'
function Dashboard() {

  const [schedule, setSchedule] = React.useState([]);
  const [passenger, setPassenger] = React.useState([]);
  const [booking, setBooking] = React.useState([]);
  const [user, setUse] = React.useState([]);
    const [train, setTrain] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:5053/api/trainShedules")
      .then((res) => {
        console.log(res.data);
        setSchedule(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

    axios
      .get("http://localhost:5053/api/travellers")
      .then((res) => {
        setPassenger(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

    axios
      .get("http://localhost:5053/api/reservations")
      .then((res) => {
        console.log(res.data);
        setBooking(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

    axios
      .get("http://localhost:5053/api/travellers")
      .then((res) => {
        console.log(res.data);
        setUse(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
    axios
      .get("http://localhost:5053/api/trains")
      .then((res) => {
        console.log(res.data);
        setTrain(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);


  return (
    <div className={styles["container"]}>
      <div className={styles["header-container"]}>
        <div className={styles["header-section"]}>
          <TrainIcon sx={{ color: "var(--primary)", fontSize: 35 }} />
          <div className={styles["header-detail-section"]}>
            <label className={styles["header-title"]}>Train Count</label>
            <label className={styles["header-label"]}>{train.length}</label>
          </div>
        </div>
        <div className={styles["header-section"]}>
          <GroupIcon sx={{ color: "var(--primary)", fontSize: 40 }} />
          <div className={styles["header-detail-section"]}>
            <label className={styles["header-title"]}>Passenger Count</label>
            <label className={styles["header-label"]}>{passenger.length}</label>
          </div>
        </div>

        <div className={styles["header-section"]}>
          <CalendarMonthIcon sx={{ color: "var(--primary)", fontSize: 35 }} />
          <div className={styles["header-detail-section"]}>
            <label className={styles["header-title"]}>Total Bookings</label>
            <label className={styles["header-label"]}>{booking.length}</label>
          </div>
        </div>
        <div className={styles["header-section"]}>
          <AccessTimeOutlinedIcon
            sx={{ color: "var(--primary)", fontSize: 35 }}
          />
          <div className={styles["header-detail-section"]}>
            <label className={styles["header-title"]}>Total Schedules</label>
            <label className={styles["header-label"]}>{schedule.length}</label>
          </div>
        </div>
        <div className={styles["header-section"]}>
          <SupervisorAccountIcon
            sx={{ color: "var(--primary)", fontSize: 40 }}
          />
          <div className={styles["header-detail-section"]}>
            <label className={styles["header-title"]}>User Count</label>
            <label className={styles["header-label"]}>{user.length}</label>
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
