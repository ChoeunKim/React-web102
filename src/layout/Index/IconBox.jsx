import React from "react";

import icons from "../../datas/iconBoxData";

const IconBox = () => {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doelusmod tempor incididunt ut labore et dolore magna aliqua.";

  const iconElements = [];

  // for-loop 사용
  for (let index = 0; index < icons.length; index++) {
    const icon = icons[index];
    iconElements.push(
      <div className="box" key={index}>
        <img src={icon.img} alt={`Icon ${index + 1}`} />
        <p>{description}</p>
      </div>
    );
  }
  return <div className="icon-box">{iconElements}</div>;
};

export default IconBox;
