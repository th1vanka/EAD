import React from "react";
import styles from "../styles/train_registration.module.css";
import Button from "../components/button/button";
import Input from "../components/input_field/input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function TrainRegistration() {
  const navigate = useNavigate();
  const [nama, setName] = React.useState("");
  const [refNo, setRefNo] = React.useState("");
  const [start, setStart] = React.useState("");
  const [end, setEnd] = React.useState("");

  const submitHandler = () => {
    const data = {
      trainName: nama,
      start: start,
      destination: end,
      refNo: refNo,
    };
    console.log(data);

    axios
      .post("http://localhost:5053/api/trains", data)
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
        <label className={styles["header-title"]}>Train Registration</label>
      </div>
      <div className={styles["body-container"]}>
        <Input
          label="Train Name"
          type="text"
          placeholder="Eg:- Ruhunu Kumari"
          required={true}
          onChangeText={(e) => setName(e.target.value)}
        />
        <Input
          label="Train Ref No"
          type="number"
          placeholder="Eg:- 125"
          required={true}
          onChangeText={(e) => setRefNo(e.target.value)}
        />
        <Input
          label="Train Start"
          type="text"
          placeholder="Eg:- Kurunegala"
          required={true}
          onChangeText={(e) => setStart(e.target.value)}
        />
        <Input
          label="Train End"
          type="text"
          placeholder="Eg:- Kurunegala"
          required={true}
          onChangeText={(e) => setEnd(e.target.value)}
        />
        <div className={styles["action-container"]}>
          <Button text="Register" clickHandler={submitHandler} />
        </div>
      </div>
    </div>
  );
}

export default TrainRegistration;
