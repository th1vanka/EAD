import React from 'react'
import styles from "../styles/trains.module.css"
import Button from "../components/button/button";
import TrainCard from '../components/train_card/card';
import Search from "../components/search/search";
import { useNavigate } from "react-router-dom";


function Trains() {
   const navigate = useNavigate();
   const registerHandler = () => {
     navigate("/trains/registration");
   };
  return (
    <div className={styles["container"]}>
      <div className={styles["create-btn-container"]}>
        <Search />
        <Button text="Create" clickHandler={registerHandler}/>
      </div>
      <div className={styles["card-container"]}>
        <TrainCard active={false} />
        <TrainCard active={true} />
        <TrainCard active={false} />
      </div>
    </div>
  );
}

export default Trains