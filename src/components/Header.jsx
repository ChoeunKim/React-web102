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
            <a href="#">How it works</a>
          </li>
          <li>
            <a href="#">Gifts</a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <img src={logo} className="logo" />
          </li>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Members</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
