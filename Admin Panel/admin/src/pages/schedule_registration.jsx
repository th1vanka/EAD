import React from 'react'
import styles from "../styles/schedule_registration.module.css";
import Button from "../components/button/button";
import Input from "../components/input_field/input";

function ScheduleRegistration() {
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
        <Input
          label="Arrive Time"
          type="time"
          placeholder="Eg:- 08.33 AM"
          required={true}
        />
        <Input
          label="Duration (Hrs)"
          type="number"
          placeholder="Eg:- 5 Hrs"
          required={true}
        />
        <div className={styles["action-container"]}>
          <Button text="Register" />
        </div>
      </div>
    </div>
  );
}

export default ScheduleRegistration;