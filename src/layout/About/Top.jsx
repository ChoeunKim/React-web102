import React from "react";
import chef_about from "../../assets/chef_about.png";
import right1 from "../../assets/right1.png";
import right2 from "../../assets/right2.png";
import BoxItem from "../../components/BoxItem";

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
      <BoxItem
        id="topbox"
        title={
          <>
            <span>GLOBAL</span>
            <br />
            <span>BUSINESS</span>
          </>
        }
        detail={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doelusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />
    </div>
  );
};

export default Top;
