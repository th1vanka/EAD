import React from "react";
import styles from "../styles/bookings.module.css";
import Button from "../components/button/button";
import BookingCard from "../components/booking_card/card";
import Search from "../components/search/search";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Bookings() {
  const navigate = useNavigate();
  const registerHandler = () => {
    navigate("/bookings/registration");
  };

  const [bookings, setBookings] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:5053/api/reservations")
      .then((res) => {
        console.log(res.data);
        setBookings(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className={styles["container"]}>
      <div className={styles["create-btn-container"]}>
        <Search />
        <Button text="Book" clickHandler={registerHandler} />
      </div>
      <div className={styles["card-container"]}>
        {bookings.map((item, index) => (
          <BookingCard
            active={index % 2 !== 0}
            name={item.passengerName}
            no={item.id.slice(0, 10)}
            mob={item.mobileNumber}
            nic={item.passengerNIC}
            booking={item.reservationDate}
            train={item.trainName}
            train_ref={item.refId}
            seat={item.noPassengers}
            train_class={item.trainClass}
          />
        ))}
      </div>
    </div>
  );
}

export default Bookings;
