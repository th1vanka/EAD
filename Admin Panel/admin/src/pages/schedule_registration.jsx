import React from "react";
import styles from "../styles/schedule_registration.module.css";
import Button from "../components/button/button";
import Input from "../components/input_field/input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function ScheduleRegistration() {
  const navigate = useNavigate();
  const [train, setTrain] = React.useState("");
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [start, setStart] = React.useState("");
  const [duration, setDuration] = React.useState("");

  const submitHandler = () => {
    const data = {
      trainName: train,
      start: from,
      end: to,
      startTime: "2023-10-16",
      duration: duration,
    };
    console.log(data);

    axios
      .post("http://localhost:5053/api/trainShedules", data)
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
        <label className={styles["header-title"]}>Schedule Registration</label>
      </div>
      <div className={styles["body-container"]}>
        <Input
          label="Train Name"
          type="text"
          placeholder="Eg:- Ruhunu Kumari"
          required={true}
          onChangeText={(e) => setTrain(e.target.value)}
        />
        <Input
          label="Train Start"
          type="text"
          placeholder="Eg:- Kurunegala"
          required={true}
          onChangeText={(e) => setFrom(e.target.value)}
        />
        <Input
          label="Train End"
          type="text"
          placeholder="Eg:- Kurunegala"
          required={true}
          onChangeText={(e) => setTo(e.target.value)}
        />
        <Input
          label="Arrive Time"
          type="time"
          placeholder="Eg:- 08.33 AM"
          required={true}
          onChangeText={(e) => setStart(e.target.value)}
        />
        <Input
          label="Duration (Hrs)"
          type="text"
          placeholder="Eg:- 5 Hrs"
          required={true}
          onChangeText={(e) => setDuration(e.target.value)}
        />
        <div className={styles["action-container"]}>
          <Button text="Register" clickHandler={submitHandler} />
        </div>
      </div>
    </div>
  );
}

export default ScheduleRegistration;
