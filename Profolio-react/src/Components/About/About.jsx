import React from 'react'
import './About.css';
import AboutImage from '../../assets/AboutImage.jpg';
import profileImage from '../../assets/profileImage.jpg';

const About = () => {
  return (
    <div className='about'>
        <div className='about-title'>
            <h1>About Me</h1>
            <img src={"AboutImage"} alt="About Image"/>
        </div>
        <div className='about-sections'>
          <img src={'profileImage'} alt=''/>
        </div>
        <div className='about-right'>
          <div className='about-para'>
            <p>I'm ---------------------------------------------------'</p>
            <p>-------------------------------------------------------</p>
          </div>
          <div className='about-skills'>
            <div className='about-skill'>
              <div className='about-skill'><p>HTML and CSS</p><hr style={{width:"50%"}}></hr></div>
              <div className='about-skill'><p>React JS</p><hr style={{width:"70%"}}></hr></div>
              <div className='about-skill'><p>JavaScript</p><hr style={{width:"60%"}}></hr></div>
              <div className='about-skill'><p>Next JS</p><hr style={{width:"50%"}}></hr></div>
            </div>
          </div>
        </div>
        <div className='about-achievements'>
          <div className='about-achivement'>
            <h1>10+</h1>
            <p>Years of Experice</p>
          </div>
          <hr/>
          <div className='about-achivement'>
            <h1>90+</h1>
            <p>Project Completed</p>
          </div>
          <hr/>
          <div className='about-achivement'>
            <h1>15+</h1>
            <p>Happy Client</p>
          </div>
        </div>
      
    </div>
  )
}

export default About
