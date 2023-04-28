import React from "react";
import "./About.css";
import AboutImg from "./Programmer1.png";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element className="aboutPage" id="About">
      <div className="aboutContainer">
        <div className="row">
          <div className="about-col-1">
            <img src={AboutImg} alt="" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p className="sub-title-content">
              Hi, I'm a Well-qualified <span>Full Stack Developer</span> familiar with a wide
              range of programming utilities and languages. Knowledgeable of
              backend and frontend development requirements with database
              management. Handles any part of the process with ease.
              Collaborative team player with a willingness to learn in and grow
              with the organization.
            </p>
                <div className="Skills-sets-header">
                  <p className="Skills-sets-title">Technical Skills</p>
                  <div className="skill-set">
                    <div>
                    <i class="fa-brands fa-html5 fa-beat-fade"></i>
                    <p>HTML</p>
                    </div>
                    <div>
                    <i class="fa-brands fa-css3-alt fa-beat-fade"></i>
                    <p>CSS</p>
                    </div>
                    <div>
                    <i class="fa-brands fa-js fa-beat-fade"></i>
                    <p>JavaScripts</p>
                    </div>
                    <div>
                    <i class="fa-brands fa-react fa-beat-fade"></i>
                    <p>React</p>
                    </div>
                    <div>
                    <i class="fa-brands fa-node fa-beat-fade"></i>
                    <p>NodeJs</p>
                    </div>
                    <div>
                    <i class="fa-sharp fa-solid fa-database fa-beat-fade"></i>
                    <p>MongoDB</p>
                    </div>
                    <div>
                    <i class="fa-sharp fa-solid fa-server fa-beat-fade"></i>
                    <p>Express</p>
                    </div>
                    <div>
                    <i class="fa-brands fa-square-git fa-beat-fade"></i>
                    <p>Git</p>
                    </div>
                    <div>
                    <i class="fa-brands fa-github fa-beat-fade"></i>
                    <p>GitHub</p>
                    </div>
                    <div>
                    <i class="fa-brands fa-bootstrap fa-beat-fade"></i>
                    <p>Bootstrap</p>
                    </div>
                    <div>
                    <i class="fa-solid fa-notdef fa-beat-fade"></i>
                    <p>PostMan</p>
                    </div>
                    <div>
                    <i class="fa-solid fa-dice-d20 fa-beat-fade"></i>
                    <p>Netlify</p>
                    </div>
                    <div>
                    <i class="fa-regular fa-square fa-beat-fade"></i>
                    <p>Render</p>
                    </div>
                    <div>
                    <i class="fa-solid fa-caret-up fa-beat-fade fa-2xl"></i>
                    <p>Vercel</p>
                    </div>
                 
                  </div>

                </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
