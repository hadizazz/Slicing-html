import React from "react";
import Navbar from "../components/Navbar";
import { AiOutlineArrowRight } from "react-icons/ai";
import Footer from "../components/Footer";
import kolektive from "../images/kolektive.png";
import { FaTag } from "react-icons/fa";
import image from "../images/personal.jpg";
import react from "../images/react.png";
import figma from "../images/figma.png"
import css from "../images/css.png"
import js from "../images/js.png"

export default function landingpage() {
  return (
    <div className="body">
      <Navbar />
      <div className="heroLP">
        <div className="boxHeading">
          <p>Frontend Developer</p>
          <span>Hello,</span>
          <h1>i'm Hadiza Cahya Firdaus.</h1>
        </div>
      </div>
      <div className="about">
        <div className="layer">
          <h1>ABOUT</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            iure dolore deserunt repudiandae nostrum repellat, quos tempore
            assumenda, eos voluptatibus alias numquam, sit Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Pariatur iure dolore deserunt
            repudiandae nostrum repellat, quos tempore assumenda, eos
            voluptatibus alias numquam, sit
          </p>
        </div>
      </div>

      <section id="experience">
        <div className="exp">
          <h3>Experience</h3>
          <div className="boxTools">
            <div className="tools">
              <img src={react} title="React JS"/>
            </div>
            <div className="tools"><img src={figma} title="Figma"/></div>
            <div className="tools"><img src={css} title="CSS"/></div>
            <div className="tools"><img src={js} title="Javascript"/></div>


          </div>
          
        </div>
        
      </section>

      <section id="project">
        <h1 class="title">Project</h1>
        <div class="content">
          <div class="box ">
            <img src={kolektive} className="imgProject" />
            <h1>Kolektive</h1>
            <div className="Tag">
              <FaTag />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur iure dolore deserunt repudiandae nostrum repellat,
              </p>
            </div>
            <button>
              See Project{" "}
              <span>
                <AiOutlineArrowRight />
              </span>
            </button>
          </div>
          <div class="box ">
            <img src={kolektive} className="imgProject" />
            <h1>Kolektive</h1>
            <div className="Tag">
              <FaTag />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur iure dolore deserunt repudiandae nostrum repellat,
              </p>
            </div>
            <button>
              See Project{" "}
              <span>
                <AiOutlineArrowRight />
              </span>
            </button>
          </div>
          <div class="box ">
            <img src={image} className="imgProject" />
            <h1>Lorem</h1>
            <div className="Tag">
              <FaTag />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur iure dolore deserunt repudiandae nostrum repellat,
              </p>
            </div>
            <button>
              See Project{" "}
              <span>
                <AiOutlineArrowRight />
              </span>
            </button>
          </div>
        </div>
      </section>

      <section id="contact">
        <h1>Contact Us</h1>
        <div className="boxForm">
          <form id="form">
            <div className="forms">
              <label for="name">Name </label>
              <input type="text" id="name" className="input" />
            </div>
            <div className="forms">
              <label for="email">Email</label>
              <input type="email" id="email" className="input" />
            </div>
            <div className="forms">
              <label for="Message">Message </label>
              <textarea
                id="message"
                className="input"
                name="message"
                style={{ height: "200px" }}
                />
            </div>
            <input type="submit" value="submit"></input>
           
          </form>
        </div>
      </section>
      <Footer />
     
    </div>
  );
}
