import React from "react";
import styles from "../styles/users.module.css";
import UserCard from "../components/user_card/card";
import Button from "../components/button/button";
import Search from "../components/search/search";
import { useNavigate } from "react-router-dom";


function Users() {
   const navigate = useNavigate();
   const registerHandler = () => {
     navigate("/users/registration");
   };
  return (
    <div className={styles["container"]}>
      <div className={styles["create-btn-container"]}>
        <Search />
        <Button text="Register" clickHandler={registerHandler} />
      </div>
      <div className={styles["card-container"]}>
        <UserCard active={true} />
        <UserCard active={true} />
        <UserCard active={false} />
        <UserCard active={true} />
        <UserCard active={false} />
      </div>
    </div>
  );
}

export default Users;
