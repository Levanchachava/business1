import React from 'react'
import "./footer.css"
import { logo, facebook, twitter, linkedin, instagram } from "../assets";


function Footer() {
  return (
    <div className='foote-cont all'>
      <div className='footer-info-cont'>
        <div className='footer-info-about'>
          <img src={logo} />
          <p>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className='footer-info-about'>
          <h5>Usefull Links</h5>
          <ul>
            <li>Content</li>
            <li>How it Works</li>
            <li>Create</li>
            <li>Explore</li>
            <li>Terms & Services</li>
          </ul>
        </div>
        <div className='footer-info-about'>
          <h5>Community</h5>
          <ul>
            <li>Help Center</li>
            <li>Partners</li>
            <li>Suggestions</li>
            <li>Blog</li>
            <li>Newsletters</li>
          </ul>
        </div>
        <div className='footer-info-about'>
          <h5>Partner</h5>
          <ul>
            <li>Our Partner</li>
            <li>Become a Partner</li>
          </ul>
        </div>
      </div>
      <div className='lines' />
        <div className='social'>
          <div>
            <p className='social-p'>Copyright 2021 HooBank. All Rights Reserved.</p>
          </div>
          <div>
            <img src={instagram} />
            <img src={facebook} />
            <img src={twitter} />
            <img src={linkedin} />
          </div>
        </div>
    </div>
  )
}

export default Footer