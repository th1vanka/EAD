import React from 'react'
import styles from "../styles/schedules.module.css"
import Button from "../components/button/button";
import ScheduleCard from "../components/schedule_card/card";
import Search from '../components/search/search';
import { useNavigate } from "react-router-dom";


function Schedules() {
   const navigate = useNavigate();
   const registerHandler = () => {
     navigate("/train-schedules/registration");
   };
  return (
    <div className={styles["container"]}>
      <div className={styles["create-btn-container"]}>
        <Search />
        <Button text="Schedule" clickHandler={registerHandler} />
      </div>
      <div className={styles["card-container"]}>
        <ScheduleCard active={false} />
        <ScheduleCard active={true} />
        <ScheduleCard active={false} />
      </div>
    </div>
  );
}

export default Schedules