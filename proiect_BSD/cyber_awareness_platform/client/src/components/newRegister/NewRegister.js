import React from "react";
import { useState, useEffect } from "react";
import "./NewRegister.scss";
import logo from "./static/1.png";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function NewRegister() {
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const ChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const ChangeCheckPassword = (event) => {
    setCheckPassword(event.target.value);
  };
  const ChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const submitRegister = async(event) => {
    event.preventDefault();
    console.log(password, checkPassword, email);
    const registerData = {
      email: email,
      password: password,
      passwordVerify: checkPassword
  }
  try {
      await axios.post(`http://localhost:5003/users/register`, registerData)
      navigate('/')
      window.location.reload();
  } catch (error) {
      console.log(error)
  }
  };
  return (
    <div className="Register">
      <div class="register-container register-center">
        <a href="/">
          <img class="register-img" src={logo} />
        </a>
        <div class="register-content">
          <form onSubmit={submitRegister} action="">
            <p class="register-p">Register</p>
            <div class="register-form ">
            <label class="register-label">E-mail</label>
              <input
                id="email"
                class="register-elem"
                onChange={ChangeEmail}
                type="email"
                name="e-mail"
                value={email}
              />
              <label class="register-label">Password</label>
              <input
                class="password register-elem"
                onChange={ChangePassword}
                type="password"
                name="password"
                value={password}
              />
              <label class="register-label">re-Password</label>
              <input
                class="password register-elem"
                onChange={ChangeCheckPassword}
                type="password"
                name="re-password"
                value={checkPassword}
              />

              <div>
                <input class="register-button" type="submit" value="Sigh Up" />
              </div>
              <div class="register-link">
                <a id="signIn" href="\Signin">
                  Already have an account? Log in
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewRegister;