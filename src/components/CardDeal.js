import React from 'react'
import { card } from "../assets";
import "./carddeal.css"


function CardDeal() {
  return (
    <div className='carddeal-cont all'>
      <div className='card-info'>
        <h3>Find a better card deal <br/> in few easy steps.</h3>
        <p>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <button>Get Started</button>
      </div>
      <div className='carddeal-photo'>
        <img src={card} />
      </div>
    </div>
  )
}

export default CardDeal