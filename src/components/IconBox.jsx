import React from "react";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

const IconBox = () => {
  const icons = [
    {
      img: icon1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doelusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: icon2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doelusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: icon3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doelusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      img: icon4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doelusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="icon-box">
      {icons.map((icon, index) => (
        <div className="box" key={index}>
          <img src={icon.img} alt={`Icon ${index + 1}`} />
          <p>{icon.description}</p>
        </div>
      ))}
    </div>
  );
};

export default IconBox;
