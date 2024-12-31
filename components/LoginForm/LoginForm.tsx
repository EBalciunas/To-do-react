import React, { useState } from "react";
import cookie from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import Button from "../Button/Button";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);
  const [isLoggingIn, setLoggingIn] = useState(false);

  const router = useRouter();

  const onLogin = async () => {
    try {
      setLoggingIn(true);

      const userData = {
        email: email,
        password: password,
      };

      const response = await axios.post(
        "http://localhost:3002/login",
        userData
      );

      if (response.status === 200) {
        setLoggingIn(false);
        setError(false);
        cookie.set("jwt_token", response.data.token);
        router.push("/");
      }

      console.log(response);
    } catch (err) {
      setLoggingIn(false);
      if (err.status === 401) {
        console.log("Login failed.");
        setError(true);
      }

      console.log(err);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1>Login</h1>
      <input
        type="Email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="Password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button title="Login" onClick={onLogin} isLoading={isLoggingIn} />
      <div>{isError && "Login failed."}</div>
    </div>
  );
};

export default LoginForm;