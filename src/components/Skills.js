import React from 'react'
import '../css/Skills.css'
import { Skill } from '../data/Data'
import { tech } from '../data/Data'

const Skills = () => {
  return (
    <div className='skills'>
      <div className='continer'>
        <div className='heading'>
           {Skill.title}
        </div>
        <div className='discription'>
            {Skill.discription}
        </div>
        <div className='elements'>
          {tech.map((techno) => (
              <div className='tech-box' key={techno.id}>
                   <div className='tech-box-title'>{techno.title}</div>
                   <div className='all-items'>
                   {techno.technology.map((item) => (
                    <div className='tech-items' key={item.name}>
                      <img src={item.image} alt={item.name}/>
                      {item.name}
                    </div>
                   ))
                   }                  
                   </div>
              </div>
          ))
          }
        </div>

      </div>
    </div>
  )
}

export default Skills