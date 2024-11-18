import React from "react";
import "../../main.css";
import logo from "../../assets/logo.png";
import MenuItem from "../../components/MenuItem";

const Header = () => {
  return (
    <>
      <header>
        <ul>
          <MenuItem to={"###"} label={"How it works"} />
          <MenuItem to={"###"} label={"Gifts"} />
          <MenuItem to={"/about"} label={"About"} />
          <MenuItem imgSrc={logo} imgAlt={"logo"} />
          <MenuItem to={"###"} label={"Login"} />
          <MenuItem to={"###"} label={"Members"} />
          <MenuItem to={"###"} label={"Contacts"} />
        </ul>
      </header>
    </>
  );
};

export default Header;
