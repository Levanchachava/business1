import React from 'react'
import { discount, robot } from "../assets";
import "./hero.css"

function Hero() {
  return (
    <div className='hero-cont'>
      <div className='hero-info'>
          <p className='info-discount'> 
            <img src={discount} className="discount-img"/> 
            <span className='disSpan' style={{color:"white"}} > 20% </span>  discount for <span className='disSpan' style={{color:"white"}}>1 month</span>  account 
          </p>
          <h2 className='info-h2'>The Next <br/> <span className='generation'>Generation</span> <br/> Payment Method.</h2>
          <p className='info-desc'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
      </div>
      <button className='hero-btn'>Get <br/> started</button>
      <div className='gradient' />
      <div className='robot-cont'>
        <img src={robot} className="hero-robot" />
      </div>
    </div>
  )
} 

export default Hero