import React from 'react'
import '../css/Home.css'
import {Bio} from '../data/Data.js'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import vikrant from '../images/vikrant_img.jpg'

const Home = () => {
    const [typeEffect] = useTypewriter({
        words: Bio.roles,
        loop:{},
        typeSpeed:100,
        deleteSpeed:40
    }) 
  return (
    <div className='Home'>
        <div className='hero'>
         <div className='hero-left'>
            <div className='title'>Hi,I am <br />{Bio.name}</div>
            <div className='about'>
                <div className='static-text'>I am, <span>{typeEffect}</span>
            </div>
            
             </div>

             <div className='description'>{Bio.description}</div>
             <div className='resume-btn'>
                  <a>About me</a>
             </div>


         </div>
         <div className='hero-right'>
               <img src={vikrant}></img>
         </div>
        </div>
    </div>
  )
}

export default Home;