import './AboutContentStyle.css';
import React from 'react'
import { Link } from 'react-router-dom';
import reactimg from './assets/react.avif'
import reactimg1 from './assets/react1.avif'


const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'> 
        <h1>who am i?</h1>
        <p> Full Stack Web Developer with expertise in both front-end and back-end technologies. Proficient in JavaScript, HTML, CSS, and modern frameworks such as React.js and Node.js. Skilled in database management, API development, and deploying scalable web applications. Strong problem-solving abilities, attention to detail, and ability to work collaboratively in agile development teams. Committed to delivering high-quality solutions that meet client requirements and provide seamless user experiences.
            <Link to='/contact'>
                <button className='btn'>Contact</button>
            </Link>
        </p>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={reactimg} className='image' alt="true" />
                </div>
                <div className='img-stack bottom'>
                    <img src={reactimg1} className='image' alt="true" />
                </div>
            </div>
        </div>
        
      
    </div>  
  )
}

export default AboutContent;
