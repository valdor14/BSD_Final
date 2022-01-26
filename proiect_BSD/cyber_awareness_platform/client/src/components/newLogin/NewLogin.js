import React from "react";
import { useState, useEffect } from "react";
import "./NewLogin.scss";
import logo from "./static/1.png";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router'
function NewLogin() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  // const history = useHistory()

  const ChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const ChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const submitSignin = async(event) => {
    event.preventDefault();
    console.log(password, email);
    const signInData = {
      email: email,
      password: password
  }
  try {
      await axios.post(`http://localhost:5003/users/login`, signInData)
      navigate('/')
      //history.push('/')
      window.location.reload();
  } catch (error) {
      console.log(error)
  }
  };
  return (
    <div class="Signin">
      <div class="login-container login-center">
        <a href="/">
          <img class="login-img" src={logo} />
        </a>

        <div class="login-content">
          <form onSubmit={submitSignin} action="">
            <p class="login-p">Sign In</p>
            <div class="login-form ">
            <label class="login-form-label">E-mail</label>
              <input
                id="email"
                class="register-elem"
                onChange={ChangeEmail}
                type="email"
                name="e-mail"
                value={email}
              />
              <label class="login-form-label">Password</label>
              <input
                class="password register-elem"
                onChange={ChangePassword}
                type="password"
                name="password"
                value={password}
              />

              <div>
                <input class="login-button" type="submit" value="Sigh In" />
              </div>
              <div class="login-link">
                <a id="signOut" href="\Register">
                  Don't have an account? Sign up
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewLogin;