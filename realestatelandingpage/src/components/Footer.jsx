// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <span className="secondaryText">
            Our vision is to find all people <br />
            the best place to live for them
          </span>
        </div>

        <div className="flexColStart f-right">
          <span>Information</span>
          <span>145 New York, FL 4571</span>

          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
