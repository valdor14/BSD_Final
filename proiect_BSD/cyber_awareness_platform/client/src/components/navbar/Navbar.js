import React, { useContext, useState, useEffect } from "react";
import AOS from "aos"
import axios from "axios";

import "./Navbar.scss"
import { Link } from "react-router-dom";

function Navbar () {

    const [isActive, setActive] = useState('false')
    const [isPractice, setPractice] = useState('false')
    const [user, setUser] = useState(null);
    const [userRole, setUserRole] = useState("x")

    const getUser = async () => {
        const user = await axios.get(`http://localhost:5003/users/loggedIn`)
        setUser(user.data)
    }

    const getUserRole = async () => {
      const user = await axios.get(`http://localhost:5003/users/loggedInUser`)
      if(user.data !== null){
        const currentUser = user.data[0]
        setUserRole(currentUser.role)
      }
  }

  const [role, setRole] = useState();





    const handleToggle = () => {
        setActive(!isActive);
      };

    const handlePractice = () => {
        setPractice(!isPractice)
    }

    async function logOut() {
        await axios.get(`http://localhost:5003/users/logOut`);
        await getUser();
      }


      useEffect(() => {
        getUser()
        getUserRole()
        AOS.init({
            easing: "ease",
            duration: 1800,
            once: true
        });
      }, []);



    return (
        <><input id="page-nav-toggle" class="main-navigation-toggle" type="checkbox" />
        <label for="page-nav-toggle">
          <svg class="icon--menu-toggle" viewBox="0 0 60 30">
            <g class="icon-group">
              <g class="icon--menu">
                <path d="M 6 0 L 54 0" />
                <path d="M 6 15 L 54 15" />
                <path d="M 6 30 L 54 30" />
              </g>
              <g class="icon--close">
                <path d="M 15 0 L 45 30" />
                <path d="M 15 30 L 45 0" />
              </g>
            </g>
          </svg>
        </label>

        <nav class="main-navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/courses/phishing">Phishing</a></li>
            <li><a href="/courses/malware">Malware</a></li>
            <li><a href="/news">News</a></li>
            {userRole === "admin" && (<li><a href="/admin">Administration Users</a></li>)}
            {userRole === "admin" && (<li><a href="/admin/news">Administration News</a></li>)}
            {userRole === "admin" && (<li><a href="/admin/analytics">Administration Analytics</a></li>)}
          </ul>
        </nav>
</>
    )
}

export default Navbar;

