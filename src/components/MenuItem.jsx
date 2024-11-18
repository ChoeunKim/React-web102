import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ label, to, imgSrc, imgAlt }) => {
  return (
    <li>
      <Link to={to} className="menu-item">
        {imgSrc && <img src={imgSrc} alt={imgAlt} className="menu-icon" />}
        {label}
      </Link>
    </li>
  );
};

export default MenuItem;
