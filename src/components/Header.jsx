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
            <a href="#" onClick={(e) => e.preventDefault()}>
              How it works
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Gifts
            </a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <img src={logo} className="logo" alt="logo" />
          </li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Login
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Members
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Contacts
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
