import React from "react";
import "../main.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <a>How it works</a>
          </li>
          <li>
            <a>Gifts</a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <img src={logo} className="logo" alt="logo" />
          </li>
          <li>
            <a>Login</a>
          </li>
          <li>
            <a>Members</a>
          </li>
          <li>
            <a>Contacts</a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
