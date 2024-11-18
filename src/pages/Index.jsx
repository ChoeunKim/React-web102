import React from "react";
import Chefs from "../layout/Index/Chefs";
import Header from "../layout/Index/Header";
import IconBox from "../layout/Index/IconBox";
import IconTitle from "../layout/Index/IconTitle";
import MainPicture from "../layout/Index/MainPicture";

const Index = () => {
  return (
    <>
      <Header />
      <MainPicture />
      <IconTitle />
      <IconBox />
      <Chefs />
    </>
  );
};

export default Index;
