import React from 'react'
import '../css/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { footerItems } from '../data/FooterData.js'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='owner-name'>
          {footerItems.name}
        </div>
        <div className='nav-items-detail'>
          {
            footerItems.navItmes.map((item, index) => (
              <span key={index}>{item}</span>
            ))
          }
        </div>
        <div className='social-media-icons'>
            <span><FacebookIcon /></span>
            <span><TwitterIcon /></span>
            <span><LinkedInIcon /></span>
            <span><InstagramIcon /></span>

        </div>
        <div className='rights-claim'>
            {footerItems.rights}
        </div>
      </div>

    </div>
  )
}

export default Footer