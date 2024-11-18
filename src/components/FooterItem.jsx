import React from "react";

const FooterItem = ({ text, showSeparator }) => {
  return (
    <>
      <li>{text}</li>
      {showSeparator && <span className="separator">|</span>}
    </>
  );
};

export default FooterItem;
