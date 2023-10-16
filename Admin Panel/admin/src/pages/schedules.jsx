import React from 'react'
import styles from "../styles/schedules.module.css"
import Button from "../components/button/button";
import ScheduleCard from "../components/schedule_card/card";
import Search from '../components/search/search';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Schedules() {
   const navigate = useNavigate();
   const registerHandler = () => {
     navigate("/train-schedules/registration");
  };
  const [schedule, setSchedule] = React.useState([]);

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
  },[]);
  return (
    <div className={styles["container"]}>
      <div className={styles["create-btn-container"]}>
        <Search />
        <Button text="Schedule" clickHandler={registerHandler} />
      </div>
      <div className={styles["card-container"]}>
        {schedule.map((item) => (
          <ScheduleCard
            active={item.isActive}
            name={item.trainName}
            no={item.id}
            from={item.start}
            to={item.end}
            arrive={item.startTime}
            duration={item.duration}
          />
        ))}
      </div>
    </div>
  );
}

export default Schedules