import React from 'react'
import styles from "../styles/train_registration.module.css";
import Button from "../components/button/button";
import Input from "../components/input_field/input";

function TrainRegistration() {
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
        />
        <Input
          label="Train Ref No"
          type="number"
          placeholder="Eg:- 125"
          required={true}
        />
        <Input
          label="Train Start"
          type="text"
          placeholder="Eg:- Kurunegala"
          required={true}
        />
        <Input
          label="Train End"
          type="text"
          placeholder="Eg:- Kurunegala"
          required={true}
        />
        <div className={styles["action-container"]}>
          <Button text="Register" />
        </div>
      </div>
    </div>
  );
}

export default TrainRegistration