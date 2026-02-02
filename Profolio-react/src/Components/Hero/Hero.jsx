import React from 'react'
import './Hero.css';
import photo from '../../assets/photo.jpg';

const Hero = () => {
  return (
    <div classname='hero'>
      <img src={photo} alt=" " />
      <h1><span>I'm Shenori,</span> frontend developer based in UK campuus.'</h1>
      <p>I am a frontend developer from california, USA with 10 years of experience.</p>
      <div className='hero-action'>
        <div className='hero-connect'>
            Connect with me
        </div>
        <div className='hero-resume'>My Resume</div>
      </div>
    </div>
  )
}

export default Hero
