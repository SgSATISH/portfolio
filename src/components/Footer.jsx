import './Footer.style.css';
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:'#fff',marginRight:'2rem'}} />
                    <div>
                        <p>123 houing board</p>
                        <p>india</p>
                    </div>
                </div>
                <div className='phone-number'>
               <h4> <FaPhone size={20} style={{color:'#fff',marginRight:'2rem'}} />+91-934017010</h4>
                </div>
                <div className='email'>
               <h4> <FaMailBulk size={20} style={{color:'#fff',marginRight:'2rem'}} />india@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About The Company</h4>
                <p>"Kick-Start your Tech Career by learning the skills that the industry demands.
                     Choose from the trending and
                     emerging tech courses to unleash your employment potential. -Courses on Latest
                </p>
                <div className='social'>
                <FaFacebook size={30} style={{color:'#fff',marginRight:'2rem'}} />
                <FaLinkedin size={30} style={{color:'#fff',marginRight:'2rem'}} />
                <FaTwitter size={30} style={{color:'#fff',marginRight:'2rem'}} />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
