import React from 'react'
import { bill, google, apple } from "../assets";
import "./billing.css"


function Billing() {
  return (
    <div className='billing-cont all'>
      <div className='bill-photo'>
        <img src={bill} />
      </div>
      <div className='bill-info'>
        <h3>Easily control your <br/> billing & invoicing.</h3>
        <p>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className='phone'>
          <img src={google} />
          <img src={apple} />
        </div>
      </div>
    </div>
  )
}

export default Billing