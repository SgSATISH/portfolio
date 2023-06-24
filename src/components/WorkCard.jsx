import './workcard.style.css';
import React from 'react'
import { NavLink } from 'react-router-dom';



const WorkCard = (props) => {
  return (
   
        <div className='project-card'>
            <img src={props.imgsrc} alt="image" />
            <h1 className='project-title'>{props.title}</h1>
            <div className='pro-details'>
                 <p>{props.text}</p>
                    <div className='pro-btns'>
                        <NavLink to={props.view} className='btn'style={{background:""}}>VIEW</NavLink>
                        <NavLink to={props.source} className='btn'>SOURCE</NavLink>
                        
                    </div>
            </div>

          
        </div>
   
  )
}

export default WorkCard;
