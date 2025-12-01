import React from "react";
import "./Logo.css";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="qtify-logo" />
    </div>
  );
};

export default Logo;
