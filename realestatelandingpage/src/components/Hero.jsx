/* eslint-disable no-unused-vars */
import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      {/*left side*/}
      <div className=" hero-container"></div>
      <div className="flexColStart hero-left">
        <div className="hero-title">
          <div className="orange-circle" />
          <h1>
            Discover <br />
            Most Suitable <br /> Property
          </h1>
        </div>
        <div className="flexColStart hero-description">
          <span className="secondaryText">
            Find a variety of properties that suit you very easily
          </span>
          <span className="secondaryText">
            Forget all difficulties in finding a residence for you
          </span>
        </div>
        <div className="flexStart search-bar">
          <HiLocationMarker color="var(--blue)" />
          <input type="text" />
          <button className="button">Search</button>
        </div>

        <div className="flexCenter stats">
          <div className="flexColCenter stat">
            <span>
              <CountUp start={45000} end={50000} duration={1} />
              <span className="plusSign">+</span>
              <br />
              <span className="secondaryText">Homes Booked</span>
            </span>
          </div>

          <div className="flexColCenter stat">
            <span>
              <CountUp start={15000} end={30000} duration={1} />
              <span className="plusSign">+</span>
              <br />
              <span className="secondaryText">Happy Customers</span>
            </span>
          </div>

          <div className="flexColCenter stat">
            <span>
              <CountUp start={0} end={28} duration={1} className="" />
              <span className="plusSign">+</span>
              <br />
              <span className="secondaryText">Awards</span>
            </span>
          </div>
        </div>
      </div>

      {/*right side*/}
      <div className="">
        <div className="image-container">
          <img src="./hero-image.png" alt="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
