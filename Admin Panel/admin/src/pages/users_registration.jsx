import React from "react";
import styles from "../styles/users_registration.module.css";
import Button from "../components/button/button";
import Input from "../components/input_field/input";
import Select from "../components/select_box/select";

function UsersRegistration() {
  return (
    <div className={styles["container"]}>
      <div className={styles["header-container"]}>
        <label className={styles["header-title"]}>System Users Registration</label>
      </div>
      <div className={styles["body-container"]}>
        <Input
          label="Users's Name."
          type="text"
          placeholder="Eg:- Emma Johnson"
          required={true}
        />
        <Input
          label="Users's NIC."
          type="text"
          placeholder="Eg:- 991548263V / 2005845263"
          required={true}
        />
        <Input
          label="Users's Contact Number."
          type="tel"
          placeholder="Eg:- 0718720024"
          required={true}
        />
        <Input
          label="Users's Email Address."
          type="email"
          placeholder="Eg:- example@gmail.com"
          required={true}
        />
        <Input
          label="Users's Address."
          type="text"
          placeholder="Eg:- 42 Elm Street, Townsville."
          required={true}
        />
        <Select
          label="Role."
          required={true}
          options={[
            { id: 1, name: "Back Officer" },
            { id: 2, name: "Travel Agent" },
          ]}
          placeholder="Select Role"
        />

        <div className={styles["action-container"]}>
          <Button text="Register" />
        </div>
      </div>
    </div>
  );
}

export default UsersRegistration;
