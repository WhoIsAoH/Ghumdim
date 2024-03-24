import React from 'react'
import './Footer.css'
// import footer_logo from '../Assets/logo.png'
// import instagram_icon from '../Assets/instagram_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        {/* <img src={footer_logo} alt="" /> */}
        <p><span style={{ color: 'rgb(235, 178, 72)' }}>G</span>humdim</p>
      </div>
      <ul className="footer-links">
        {/* <li>Destinations</li> */}
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
      <div className="footer-social-icon">

        <div className="footer-icons-container">
          <i className="fa-brands fa-instagram"></i>
        </div>

        <div className="footer-icons-container">
          <i className="fa-brands fa-twitter"></i>
        </div>

        <div className="footer-icons-container">
          <i className="fa-brands fa-facebook"></i>
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
