import './Hero.img.css';
import React from 'react'
import BgImg  from './assets/img1.jpg'; 
import { Link } from 'react-router-dom';

const Heroimg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={BgImg} alt="BgImg" />
        </div>
        <div className='content'>
            <p>hi  i'm  satish  Ghodki </p>
            <h1>Full stack web developer.</h1>
            <div>
                <Link to='/project' className='btn'>Project</Link>
                <Link to='/contact' className=' btn btn-light'>Contact</Link>
            </div>
        </div>

      
    </div>
  )
}

export default Heroimg

