import React from 'react'
import { binance, coinbase, airbnb, dropbox } from "../assets";
import "./cta.css"


function CTA() {
  return (
    <div className='cta-cont all'>
      <div className='cta-logo'>
        <img src={airbnb} />
        <img src={binance} />
        <img src={coinbase} />
        <img src={dropbox} />
      </div>
      <div className='sevice-cont'>
        <div className='service-info'>
            <h2>Let’s try our service now!</h2>
            <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
        <div className='service-tn'>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default CTA