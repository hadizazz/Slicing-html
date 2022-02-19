import React from "react";
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineTwitter}from 'react-icons/ai'
const Footer = () => {
  return (
    <div className="footer">
          <h2>@ Simone.2021 All Right Resevered</h2>
          <a href="" className="logoFooter"><AiOutlineTwitter/></a>
          <a href="" className="logoFooter"><AiFillFacebook/></a>
      </div>
  );
};

export default Footer;
