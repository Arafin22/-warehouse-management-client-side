import React from "react";
import banner from "../../images/books1.png";
import HomeProduct from "../Products/HomeProduct/HomeProduct";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <img src={banner} alt="" />
      <HomeProduct></HomeProduct>
    </div>
  );
};

export default Home;
