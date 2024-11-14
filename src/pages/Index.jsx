import React from "react";
import Chefs from "../components/Chefs";
import Header from "../components/Header";
import IconBox from "../components/IconBox";
import IconTitle from "../components/IconTitle";
import MainPicture from "../components/MainPicture";

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
