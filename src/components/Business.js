import React from 'react'
import './business.css'
import { star, shield, send } from "../assets";

function Business() {
  return (
    <div className='business-cont all'>
      <div className='business-info'>
        <h2>You do the business, <br/> we’ll handle the money.</h2>
        <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <button>Get Started</button>
      </div>
      <div className='business-reward'> 
          <div className='reward1'>
        <div className='photo'>
          <img src={star} />
        </div>
        <div className='reward-info'>
          <h3 className='reward-first-child'>Rewards</h3>
          <p>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
        </div>
          </div>
          <div className='reward1'>
        <div className='photo'>
          <img src={shield} />
        </div>
        <div className='reward-info'>
          <h3>100% Secured</h3>
          <p>We take proactive steps make sure your information and transactions are secure.</p>
        </div>
          </div>
          <div className='reward1'>
        <div className='photo'>
          <img src={send} />
        </div>
        <div className='reward-info'>
          <h3>Rewards</h3>
          <p>A balance transfer credit card can save you a lot of money in interest charges.</p>
        </div>
          </div>
      </div>
    </div>
  )
}

export default Business