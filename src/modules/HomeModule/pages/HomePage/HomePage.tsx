import React from "react";
import { Content } from "../../components/Content";
import { Navbar } from "../../components/Navbar";
import "./HomePage.scss";
export const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Content />
    </>
  );
};
