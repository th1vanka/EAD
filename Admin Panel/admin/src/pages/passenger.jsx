import React from "react";
import styles from "../styles/passenger.module.css";
import Button from "../components/button/button";
import PassengerCard from "../components/passenger_card/card";
import Search from "../components/search/search";
import { useNavigate } from "react-router-dom";

function Passenger() {
  const navigate=useNavigate()
  const registerHandler = () => {
    navigate("/passengers/registration");
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["create-btn-container"]}>
        <Search /> <Button text="Register" clickHandler={registerHandler} />
      </div>
      <div className={styles["card-container"]}>
        <PassengerCard active={true} />
        <PassengerCard active={true} />
        <PassengerCard active={false} />
        <PassengerCard active={true} />
        <PassengerCard active={false} />
      </div>
    </div>
  );
}

export default Passenger;
