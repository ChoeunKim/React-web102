import React from "react";
import chef_about from "../assets/chef_about.png";
import right1 from "../assets/right1.png";
import right2 from "../assets/right2.png";
const Top = () => {
  return (
    <div className="top">
      <div className="top_left">
        <img src={chef_about} alt="chef_about" />
      </div>
      <div className="top_right">
        <img src={right1} alt="right1" />
        <img src={right2} alt="right2" />
      </div>
      <div className="top_box">
        <p>
          GLOBAL
          <br />
          BUSINESS
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          elusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default Top;
