import React from "react";
import "./Hero.css";
import headphones from "../../assets/headphones.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>100 Thousand Songs, ad-free</h1>
        <p>Over thousands podcast episodes</p>
      </div>

      <div className="hero-img">
        <img src={headphones} alt="headphones" />
      </div>
    </div>
  );
};

export default Hero;
