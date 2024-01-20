/* eslint-disable no-unused-vars */
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="h-container paddings innerWidth flexCenter">
        <img src="./logo.png" alt="logo" width={100} />
        <div className="flexCenter h-menu">
          <a href="">Residencies</a>
          <a href="">Our Values</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button flexCenter1" href="">
            Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
