import React from 'react'
import './Hero.css';
import heroImage from '../../assets/hero-image.png';

const Hero = () => {
  return (
    <div classname='hero'>
      <img src={heroImage} alt=" " />
      <h1>I'm Shenori, frontend developer based in UK campuus.'</h1>
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
