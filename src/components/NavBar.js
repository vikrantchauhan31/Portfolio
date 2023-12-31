import React, { useRef } from 'react'
import '../css/NavBar.css'

import { BiAdjust } from "react-icons/bi";
//import {Link} from 'react-router-dom'

const NavBar = () => {
 
  const handleClick = (elementRef) => {
    // console.log('clicked ...!!')
    // window.scrollTo({
    //   top: elementRef.current.offsetTop,
    //   behavior:'smooth'
    // })
  }

  return (
    <div className='Navbar'>
      <div className='complete-nav'>
        <div className='left-sec'>
          <div className='logo'>
           <BiAdjust/>
           </div>
           Portfolio
        </div>
        <div className='mid-sec'>
            <ul>
                <li>About</li>
                <li>Skills</li>
                <li>Education</li>
            </ul>
        </div>
        <div className='right-sec'>
            <div className='nav-btn'>
               <a href='https://github.com/vikrantchauhan31?tab=repositories' target='_blank'>Github Profile</a>
             </div>
        </div>
        </div>

    </div>
  )
}

export default NavBar