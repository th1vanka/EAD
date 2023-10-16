import React from 'react'
import styles from "../styles/bookings.module.css";
import Button from "../components/button/button";
import BookingCard from "../components/booking_card/card";
import Search from "../components/search/search";
import { useNavigate } from "react-router-dom";

function Bookings() {
   const navigate = useNavigate();
   const registerHandler = () => {
     navigate("/bookings/registration");
   };
  return (
    <div className={styles["container"]}>
      <div className={styles["create-btn-container"]}>
        <Search />
        <Button text="Book" clickHandler={registerHandler} />
      </div>
      <div className={styles["card-container"]}>
        <BookingCard active={false} />
        <BookingCard active={true} />
        <BookingCard active={false} />
      </div>
    </div>
  );
}

export default Bookings