import React from "react";
import chef from "../../assets/chef.png";
const Chefs = () => {
  return (
    <div className="chefs">
      <div className="chefs-area">
        <div className="chefs-text">
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            elusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <img src={chef} alt="chef" className="chefs-img" />
      </div>
    </div>
  );
};

export default Chefs;
