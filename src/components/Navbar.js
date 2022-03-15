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
          <li><a href=""></a></li>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Contact</a></li>
          <li><a href=""></a></li>
          <li><a href=""><MdFacebook/></a></li>
          <li><a href="" ><AiOutlineTwitter/></a></li>
          <li><a href=""><BsLinkedin/></a></li>
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
