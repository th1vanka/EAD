import React from 'react'
import styles from "../styles/login.module.css"
import Input from "../components/input_field/input";
import Button from "../components/button/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
      const navigate = useNavigate();
    const [username, setUerName] = React.useState("")
     const [password, setPassword] = React.useState("");
    const submitHandler = () => {
        const data = {
          email: username,
          password: password,
        };

        axios
          .post("http://localhost:5053/api/v1/authenticate/login", data)
          .then((res) => {
            localStorage.setItem("token","skks")
            navigate("/dashboard");
          })
          .catch((err) => {
            alert(err.message);
          });
    }
  return (
    <div className={styles["container"]}>
      <div className={styles["form-container"]}>
        <div className={styles["title"]}>RailHub Login</div>
        <br />
        <Input
          label="Username"
          type="text"
          placeholder="Eg:- emma000"
          required={true}
          onChangeText={(e) => setUerName(e.target.value)}
        />
        <br />
        <Input
          label="Password"
          type="text"
          placeholder="Eg:- ********"
          required={true}
          onChangeText={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button text="Login" clickHandler={submitHandler} />
      </div>
    </div>
  );
}

export default Login