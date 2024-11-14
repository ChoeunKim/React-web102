import React from "react";

const Box = ({ title, detail, num }) => {
  return (
    <div className="bottom_box">
      {title && <p id="box_title">{title}</p>}
      {detail && <p id="box_detail">{detail}</p>}
      {num && <p id="num">{num}</p>}
    </div>
  );
};

const BoxLeft = () => {
  return (
    <div className="box_left">
      <Box
        title="TITLE"
        detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Box
        title="TITLE"
        detail="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Box num="3" />
      <Box num="4" />
      <Box num="5" />
      <Box num="6" />
    </div>
  );
};
const BoxRight = () => {
  return (
    <div className="box_right">
      <p id="num">7</p>
    </div>
  );
};

const BoxAll = () => {
  return (
    <div id="box_all">
      <BoxLeft />
      <BoxRight />
    </div>
  );
};

export default BoxAll;
