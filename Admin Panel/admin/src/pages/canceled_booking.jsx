import React from 'react'
import styles from "../styles/canceled_bookings.module.css"
import BookingCard from "../components/booking_card/card";
import Search from "../components/search/search";
import CanceledBookingCard from '../components/canceled_booking_card/card';

function CanceledBooking() {
  return (
    <div className={styles["container"]}>
      <div className={styles["create-btn-container"]}>
        <Search />
      </div>
      <div className={styles["card-container"]}>
        <CanceledBookingCard active={false} />
        <CanceledBookingCard active={false} />
        <CanceledBookingCard active={false} />
        <CanceledBookingCard active={false} />
      </div>
    </div>
  );
}

export default CanceledBooking