import React from 'react'
import "./stats.css"

function Stats() {
  return (
    <div className='stats-cont all'>
        <div className='stats'>
          <h2>3800+</h2>
          <p>user active</p>
        </div>
        <div className='line' />
        <div className='stats'>
          <h2>230+</h2>
          <p>trusted by company</p>
        </div>
        <div className='line' />
        <div className='stats'>
          <h2>230M+</h2>
          <p>transaction</p>
        </div>
    </div>
  )
}

export default Stats