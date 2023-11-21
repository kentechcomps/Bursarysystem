import React from "react";
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGooglePlus, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <h3>Masinga Constituency</h3>
        <p id="contact" >Contacts : 0724676585 
        </p>
        <p id="courtesyof">Courtesy of Hon. Joshua Mbithi Mwalyo</p>

        <ul className="socials">
          <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faGooglePlus} /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
          <li><a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        </ul>
      {/* <p id="copyright"> Copyright 2023 Kitui Central Constituency
      </p> */}
      </div>
      <div className="footer-bottom">
      <p>Copyright &copy; 2021 <a href="#">Masinga Constituency</a></p>
      </div>
             
    </footer>
  );
};

export default Footer;
