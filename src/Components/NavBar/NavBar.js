import React from 'react';
import logo from './logo.png';
import './NavBar.css';
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <div
    className="header"
    // style={{
    //   backgroundImage: `url(${""})`,
    //   backgroundSize: "cover",
    //   backgroundRepeat:"no-repeat",
    //   height:"100vh",
    //   width: "100%"
    // }}
  >
    <div className="container">
      <nav>
        <img src={logo} alt="" className="logo"/>
        <ul>
          <li><Link to="Home" spy={true} smooth ={true} offset={-100} duration={250}>Home</Link></li>
          <li><Link to="About"  spy={true} smooth ={true} offset={-100} duration={250}>About</Link></li>
          {/* <li><Link to="Skills"  spy={true} smooth ={true} offset={-100} duration={250}>Skills</Link></li> */}
          <li><Link to="Projects"  spy={true} smooth ={true} offset={-100} duration={250}>Projects</Link></li>
          <li><Link to="Certificate"  spy={true} smooth ={true} offset={-100} duration={250}>Certificate</Link></li>
          <li><Link to="Contact"  spy={true} smooth ={true} offset={-100} duration={250}>Contact</Link></li>
        </ul>
      </nav>
      {/* <div className="header-text">
        <p>MERN Stack Developer</p>
        <h1>Hi, I'm <span>Saravana Kumar</span>  </h1>
      </div> */}
    </div>
  </div>
  )
}

export default NavBar;