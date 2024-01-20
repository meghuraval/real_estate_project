// eslint-disable-next-line no-unused-vars
import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexCoCenter inner-container">
          <span className="primaryText">Get Started With Homyz</span>
          <span className="secondaryText flexColCenter">
            Subscribe and find super attractive prices quotes <br /> Find your
            residence soon
          </span>
          <button className="button getStartedButton">
            <a href="mail to: admin@homyz.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
