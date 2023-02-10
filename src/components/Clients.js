import React from 'react'
import { quotes, people01, people02, people03 } from "../assets";
import "./clients.css"


function Clients() {
  return (
    <div className='clients-cont all'>
      <div className='clients-cont-info'>
        <img className='quot' src={quotes} />
        <p className='paragraph'>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
        <div>
          <div className='clients-desc'>
            <img className='people' src={people01} />
            <div>
              <h4>Herman Jensen</h4>
              <p>Founder & Leader</p>
            </div>
          </div>
        </div>
      </div>
      <div className='clients-cont-info'>
        <img className='quot' src={quotes} />
        <p className='paragraph' >Money makes your life easier. If you're lucky to have it, you're lucky.</p>
        <div>
            <div className='clients-desc secondpp'>
              <img className='people' src={people02} />
            <div>
              <h4>Steve Mark</h4>
              <p>Founder & Leader</p>
            </div>
          </div>
        </div>
      </div>
      <div className='clients-cont-info'>
        <img className='quot' src={quotes} />
        <p className='paragraph' >It is usually people in the money business, finance, and international trade that are really rich.</p>
        <div>
          <div className='clients-desc lastpp'>
            <img className='people' src={people03} />
            <div>
              <h4>Kenn Gallagher</h4>
              <p>Founder & Leader</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clients