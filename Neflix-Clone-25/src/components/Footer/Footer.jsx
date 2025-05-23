import React from 'react';
import './footer.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CopyrightIcon from '@mui/icons-material/Copyright';
function Footer() {
  return (
    <div className='footer-outer-container'>
        <div className='footer-inner-container'> 
          <div className='footr-icon'>
            <FacebookOutlinedIcon/>
            <InstagramIcon/>
            <YouTubeIcon/>

          </div>
          <div className='footer-data'> 
            <div>
              <ul>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notice</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
              </ul>
            </div>
            <div>
              <ul> 
                <li>Gift Cards</li>
                <li>Terms of use</li>
                <li>Coorporate Information</li> 
                </ul>
              </div>
            <div>
              <ul>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className='service-code'>
            <p> Service Code</p>
          </div>
          <div className='copy-write'>
            <CopyrightIcon/> 1997-2024 Netflix, Inc.
          </div>
        </div>
    </div>
  )
}

export default Footer;