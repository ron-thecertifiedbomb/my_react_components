import React from "react";
import "./Home.css";
import Gallery from "../../components/Gallery/Gallery";
import Background from "../../components/Background/Background";

const Home = () => {
  return (
    <div className="home-container">
      <Background />
      <Gallery />
    </div>
  );
};

export default Home;
