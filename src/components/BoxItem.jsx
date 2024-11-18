import React from "react";

const BoxItem = ({ title, detail, num, imgSrc, imgAlt, id }) => {
  return (
    <div className="boxitem" id={id}>
      {title && <p id="box_title">{title}</p>}
      {detail && <p id="box_detail">{detail}</p>}
      {num && <p id="num">{num}</p>}
      {imgSrc && <img src={imgSrc} alt={imgAlt} className="top_right" />}
    </div>
  );
};

export default BoxItem;
