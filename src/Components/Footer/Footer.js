import React from 'react'
import './footer.css'
import {   FaGithub,  FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="/#"  className='footer_logo'>PAZHANI</a>
      <p style={{marginBottom:"20px",color:"white"}}>Let's connect</p>

     

      <div className='footer_socials'>
         <a href='https://github.com/PAZHANI-KV' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
         
         <a href='https://www.linkedin.com/in/pazhani-k-v-58630b249/' target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
         
      </div>

      <div className="footer_content">
          <small style={{color:"rgb(193, 220, 253 )"}}>Made up of code using React</small>
      </div>
    </footer>
  )
}

export default Footer