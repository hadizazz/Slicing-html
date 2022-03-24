import React from "react";
import "../css/style.css"
import {AiOutlineTwitter} from 'react-icons/ai'
import {MdFacebook} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'


export default function Navbar() {
  return (
    <nav>
        <div className="logo">
          <h4>Za</h4>
        </div>
        <ul >
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href=""></a></li>
          <li><a href="https://www.facebook.com/hadiza21/" target="_blank" ><MdFacebook/></a></li>
          <li><a href="https://twitter.com/hadizazz" target="_blank" ><AiOutlineTwitter/></a></li>
          <li><a href="https://www.linkedin.com/in/hadiza-cahya-firdaus-50b288184/"target="_blank" ><BsLinkedin/></a></li>
        </ul>

        <div class="menu-toggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

  );
}