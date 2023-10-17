import React, { useEffect, useState } from "react";
import styles from "../styles/trains.module.css";
import Button from "../components/button/button";
import TrainCard from "../components/train_card/card";
import Search from "../components/search/search";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Trains() {
  const navigate = useNavigate();
  const registerHandler = () => {
    navigate("/trains/registration");
  };
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5053/api/trains")
      .then((res) => {
        console.log(res.data);
        setTrains(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className={styles["container"]}>
      <div className={styles["create-btn-container"]}>
        <Search />
        <Button text="Create" clickHandler={registerHandler} />
      </div>
      <div className={styles["card-container"]}>
        {trains.map((item, index) => (
          <TrainCard
            id={item.id}
            active={item.isActive}
            name={item.trainName}
            no={item.refNo}
            start={item.start}
            end={item.destination}
          />
        ))}
      </div>
    </div>
  );
}

export default Trains;
