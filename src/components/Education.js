import React from 'react'
import '../css/Education.css'
import {college} from '../data/EducationData.js'
import { title } from '../data/EducationData.js'
import { clgImg } from '../data/EducationData.js'
import { schooling} from '../data/EducationData.js'

const Education = () => {
  return (
    <div className='education'>
        <div className='education-title'>
               {title.heading}
        </div>
        <div className='education-disc'>
              <span>{title.titleBody}</span>
        </div>
        <div className='details'>
            {/* <div className='clg'>
                <div className='clg-box'>
                      <div className='card-head'>                
                          <img src={clgImg}/>
                        <div className='head-right'>
                            <div className='clg-name'>
                              {college.name}
                          </div>
                          <div className='clg-degree'>
                            {college.degree}
                          </div>
                          <div className='dgree-dates'>
                            {college.date}
                          </div>
                        </div>
                      </div>
                      <div className='card-body'>
                         <div className='grades'>
                          <b>Grade: </b>
                          {college.grade} CGPA
                         </div>
                      </div>
                      <div className='card-foot'>
                           {college.discription}
                      </div>
                </div>
                

            </div> */}
            
            <div className='scl'>
              {
                schooling.map((item)=>(
                  <div className='scl-box' key={item.id}>
                  <div className='card-head'>                
                      <img src={item.image}/>
                    <div className='head-right'>
                        <div className='scl-name'>
                          {item.name}
                      </div>
                      <div className='clg-degree'>
                        {item.degree}
                      </div>
                      <div className='dgree-dates'>
                        {item.date}
                      </div>
                    </div>
                  </div>
                  <div className='card-body'>
                     <div className='grades'>
                      <b>Grade: </b>
                      {item.grade}
                     </div>
                  </div>
                  <div className='card-foot'>
                       {item.discription}
                  </div>
            </div>
                ))
              }
            </div> 
        </div>
    </div>
  )
}

export default Education