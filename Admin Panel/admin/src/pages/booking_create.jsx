import React from "react";
import styles from "../styles/booking_create.module.css";
import Button from "../components/button/button";
import Input from "../components/input_field/input";
import Select from "../components/select_box/select";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BookingCreate() {
  const navigate = useNavigate();
  const [passengerName, setPassengerName] = React.useState("");
  const [nic, setNiC] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [train, setTrain] = React.useState("");
  const [trainClass, setTrainClass] = React.useState("");
  const [seat, setSeat] = React.useState("");
  const [date, setDate] = React.useState("");

  const submitHandler = () => {
    const data = {
      RefId: "H0012",
      PassengerName: passengerName,
      reservationDate: date,
      noPassengers: seat,
      trainName: train,
      passengerNIC: nic,
      mobileNumber: contact,
      trainclass: trainClass,
    };

    axios
      .post("http://localhost:5053/api/reservations", data)
      .then((res) => {
        alert("Done");
        navigate(-1);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["header-container"]}>
        <label className={styles["header-title"]}>Create Booking</label>
      </div>
      <div className={styles["body-container"]}>
        <Input
          label="Passenger's Name."
          type="text"
          placeholder="Eg:- Emma Johnson"
          required={true}
          onChangeText={(e) => setPassengerName(e.target.value)}
        />
        <Input
          label="Passenger's NIC."
          type="text"
          placeholder="Eg:- 991548263V / 2005845263"
          required={true}
          onChangeText={(e) => setNiC(e.target.value)}
        />
        <Input
          label="Passenger's Contact Number."
          type="text"
          placeholder="Eg:- 0718720024"
          required={true}
          onChangeText={(e) => setContact(e.target.value)}
        />
        <Select
          label="Train Name"
          required={true}
          options={[
            { id: 1, name: "Ruhunu Kumari" },
            { id: 2, name: "Udarata Manike" },
            { id: 2, name: "Yal Devi" },
          ]}
          placeholder="Select a Class"
          onChangeText={(e) => setTrain(e.target.value)}
        />
        <Select
          label="Class"
          required={true}
          options={[
            { id: 1, name: "1" },
            { id: 2, name: "2" },
          ]}
          placeholder="Select a Class"
          onChangeText={(e) => setTrainClass(e.target.value)}
        />
        <Input
          label="Seat Count"
          type="number"
          placeholder="Eg:- 5 Seats"
          required={true}
          onChangeText={(e) => setSeat(e.target.value)}
        />
        <Input
          label="Booking Date"
          type="date"
          placeholder="Eg:- 10/26/2023"
          required={true}
          onChangeText={(e) => setDate(e.target.value)}
        />
        <div className={styles["amount-container"]}>
          <label className={styles["amount-label"]}>Total Amount</label>
          <label className={styles["amount"]}>
            Rs{" "}
            {trainClass === "1"
              ? seat * 50
              : trainClass === "2"
              ? seat * 30
              : trainClass === "2" && seat * 20}
            .00
          </label>
        </div>
        <div className={styles["action-container"]}>
          <Button text="Confirm" clickHandler={submitHandler} />
        </div>
      </div>
    </div>
  );
}

export default BookingCreate;
