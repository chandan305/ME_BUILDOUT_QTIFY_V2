import React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <div className="navbar">
      <Logo />
      <Search />
      <Button text="Give Feedback" />
    </div>
  );
};

export default Navbar;
