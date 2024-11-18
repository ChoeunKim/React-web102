import React from "react";
import footerData from "../../datas/footerData";
import FooterItem from "../../components/FooterItem";
const Footer = () => {
  return (
    <div id="footer">
      <ul>
        {footerData.map((item, index) => (
          <FooterItem
            key={index}
            text={item}
            showSeparator={index !== footerData.length - 1} // 마지막 항목에는 separator 제거
          />
        ))}
      </ul>
    </div>
  );
};

export default Footer;
