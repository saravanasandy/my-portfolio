import React from 'react'
import './Projects.css';
import proimage from './Coding logo3.jpg';
import { Element } from 'react-scroll';

const Projects = () => {
  return (
    <Element className='projectPage' id='Projects'>
      <div className='projectContainer'>
        <h1 className='sub-title'> My Projects </h1>
          <div className='project-list'>
              <div className='work'>
                  <img src={proimage} alt='img'/> 
                  <div className='layer'>
                    <h3>Social Media App</h3>
                    <p> This is First app Project</p>
                    <a href='#'><i class="fa-sharp fa-solid fa-link fa-bounce"></i></a>
                  </div>
              </div>
              <div className='work'>
                  <img src={proimage} alt='img'/> 
                  <div className='layer'>
                    <h3>Shopping App</h3>
                    <p> This is Second app Project</p>
                    <a href='#'><i class="fa-sharp fa-solid fa-link fa-bounce"></i></a>
                  </div>
              </div>
              <div className='work'>
                  <img src={proimage} alt='img'/> 
                  <div className='layer'>
                    <h3>Online Shopping App</h3>
                    <p> This is Third app Project</p>
                    <a href='#'><i class="fa-sharp fa-solid fa-link fa-bounce"></i></a>
                  </div>
              </div>
              <div className='work'>
                  <img src={proimage} alt='img'/> 
                  <div className='layer'>
                    <h3>Social Media App</h3>
                    <p> This is First app Project</p>
                    <a href='#'><i class="fa-sharp fa-solid fa-link fa-bounce"></i></a>
                  </div>
              </div>
              <div className='work'>
                  <img src={proimage} alt='img'/> 
                  <div className='layer'>
                    <h3>Shopping App</h3>
                    <p> This is Second app Project</p>
                    <a href='#'><i class="fa-sharp fa-solid fa-link fa-bounce"></i></a>
                  </div>
              </div>
              <div className='work'>
                  <img src={proimage} alt='img'/> 
                  <div className='layer'>
                    <h3>Online Shopping App</h3>
                    <p> This is Third app Project</p>
                    <a href='#'><i class="fa-sharp fa-solid fa-link fa-bounce"></i></a>
                  </div>
              </div>
          </div>
      </div>
    </Element>
  )
}

export default Projects