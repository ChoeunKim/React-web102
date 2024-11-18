import React from "react";
import BoxItem from "../../components/BoxItem";
import boxItemsData from "../../datas/boxItemsData";

const BoxAll = () => {
  return (
    <div id="box_all">
      <div className="box_left">
        {boxItemsData.map((item, index) => (
          <BoxItem
            key={index}
            title={item.title}
            detail={item.detail}
            num={item.num}
          />
        ))}
      </div>
      <div className="box_right">
        <p id="num">7</p>
      </div>
    </div>
  );
};

export default BoxAll;
