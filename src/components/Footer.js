import React from "react";
import {AiOutlineTwitter} from 'react-icons/ai'
import {MdFacebook} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="wrapperFooter">
        <div className="rowFooter">
          <div className="columnFooter col-3">
            <div className="titleFooter">Diza</div>
            <p className="linkFooter text-uppercase  text-start">Personal</p>
            <div className="titleFooter">ADDRESS</div>
            <p className="linkFooter text-uppercase  text-start">
              69 Queen St, Melbourne Australia
            </p>
            <div className="titleFooter">Email</div>
            <p className="linkFooter text-uppercase  text-start">
              hadizazz81@gmail.com
            </p>
          </div>
          <div className="columnFooter col-3">
            <div className="titleFooter">Menu</div>
            <a href="#home" className="linkFooter text-uppercase  text-start">Home</a>
            <a href="#about" className="linkFooter text-uppercase  text-start">About</a>
            <a href="#experience" className="linkFooter text-uppercase  text-start">Project</a>
            <a href="#contact" className="linkFooter text-uppercase  text-start">Contact</a>

          </div>
          <div className="columnFooter col-3">
            {/* <div className="titleFooter">Subscribe</div> */}
            {/* <p className="linkFooter text-uppercase  text-start">Subscribe to our newsletter and we will inform you about newset projects and promotions</p> */}
          </div>
        </div>
      
      </div>
      <div className="line"></div>
      <div className="wrapperFooter">
        <div className="columnFooter">
            <div className="textFooter">@ DIZA.2022</div>
            <p className="textFooter">Designed & Developed by Hadiza Cahya Firdaus</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
