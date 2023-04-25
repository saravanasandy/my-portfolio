import React from "react";
import "./Home.css";
import HomeImg from './programmer5.png'
import Type from "./Type";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <Element className="homepage" id="Home">
      <div className="container">
        <div className="row-home">
          <div className="header-text">
            {/* <p>MERN Stack Developer</p> */}
            <Type />
            <h1>
              Hi, I'm <span>Saravana Kumar</span>{" "}
            </h1>
            <br />
            <i class="fa-brands fa-square-github fa-beat-fade"></i> &nbsp;
            <i class="fa-brands fa-linkedin fa-beat-fade"></i> &nbsp;
            <i class="fa-solid fa-envelope-circle-check fa-beat-fade"></i>{" "}
            &nbsp;
            <i class="fa-solid fa-phone-volume fa-beat-fade"></i> &nbsp;
          </div>
          <div className="header-img">
              <img src={HomeImg} alt="img"/>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Home;
