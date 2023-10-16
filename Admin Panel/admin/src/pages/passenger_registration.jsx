import React from "react";
import styles from "../styles/passenger_registration.module.css";
import Button from "../components/button/button";
import Input from "../components/input_field/input";

function PassengerRegistration() {
  return (
    <div className={styles["container"]}>
      <div className={styles["header-container"]}>
        <label className={styles["header-title"]}>Passenger Registration</label>
      </div>
      <div className={styles["body-container"]}>
        <Input
          label="Passenger's Name."
          type="text"
          placeholder="Eg:- Emma Johnson"
          required={true}
        />
        <Input
          label="Passenger's NIC."
          type="text"
          placeholder="Eg:- 991548263V / 2005845263"
          required={true}
        />
        <Input
          label="Passenger's Contact Number."
          type="tel"
          placeholder="Eg:- 0718720024"
          required={true}
        />
        <Input
          label="Passenger's Email Address."
          type="email"
          placeholder="Eg:- example@gmail.com"
          required={true}
        />
        <Input
          label="Citizenship/Nationality."
          type="text"
          placeholder="Eg:- Sri-Lankan"
          required={true}
        />
        <Input
          label="Passenger's Address."
          type="text"
          placeholder="Eg:- 42 Elm Street, Townsville."
          required={true}
        />
        <div className={styles["action-container"]}>
          <Button text="Register" />
        </div>
      </div>
    </div>
  );
}

export default PassengerRegistration;
