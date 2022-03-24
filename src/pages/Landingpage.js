import React from "react";
import Navbar from "../components/Navbar";
import { AiOutlineArrowRight } from "react-icons/ai";
import Footer from "../components/Footer";
import kolektive from "../images/kolektive.png";
import lostandfound from "../images/lostandfound.png";
import cuciin from "../images/cuciin.png";
import { FaTag } from "react-icons/fa";
import image from "../images/personal.jpg";
import pp from '../images/diza.jpg';
import react from "../images/react.png";
import figma from "../images/figma.png";
import css from "../images/css.png";
import js from "../images/js.png";

export default function landingpage() {
  const kolektiveClick = () => {
    window.open("https://kolektive.netlify.app/");
  };
  return (
    <div className="body">
      <Navbar />
      <section id="home">
        <div className="heroLP">
          <div className="boxHeading">
            <p>Frontend Developer</p>
            <span>Hello,</span>
            <h1>i'm Hadiza Cahya Firdaus.</h1>
          </div>
          <div className="boxHeading">
            <img src={pp}/>
        </div>
          </div>
      </section>

      <section id="about">
        <div className="about">
          <div className="layer">
            <h1>ABOUT</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              iure dolore deserunt repudiandae nostrum repellat, quos tempore
              assumenda, eos voluptatibus alias numquam, sit Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Pariatur iure dolore
              deserunt repudiandae nostrum repellat, quos tempore assumenda, eos
              voluptatibus alias numquam, sit
            </p>
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="exp">
          <h3>Tools Experience</h3>
          <div className="boxTools">
            <div className="tools">
              <img src={react} title="React JS" />
            </div>
            <div className="tools">
              <img src={figma} title="Figma" />
            </div>
            <div className="tools">
              <img src={css} title="CSS" />
            </div>
            <div className="tools">
              <img src={js} title="Javascript" />
            </div>
          </div>
        </div>
      </section>

      <section id="project">
        <h1 class="title">My Project</h1>
        <div class="content">
          <div class="box ">
            <img src={cuciin} className="imgProject" />
            <h1>Cuciin</h1>
            <div className="Tag">
              <FaTag />
              <p>
                Aplikasi website mengenai jasa laundry online untuk mempermudah
                masyarakat dalam melaksanakan laundry tanpa harus ribet dan
                mengeluarkan banyak waktu serta tenaga.
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
                Kolektive merupakan platform untuk membantu event-event yang
                sedang berlangsung dengan mengadakan open donation atau campaign
                bagi yang ingin membantu melancarkan sebuah event-event dengan
                cara berdonasi.
              </p>
            </div>
            <button type="button" onClick={kolektiveClick}>
              See Project{" "}
              <span>
                <AiOutlineArrowRight />
              </span>
            </button>
          </div>
          <div class="box ">
            <img src={lostandfound} className="imgProject" />
            <h1>Lost And Found</h1>
            <div className="Tag">
              <FaTag />
              <p>
                Aplikasi Website mengenai sistem pencarian dan pengumuman barang
                hilang yang dapat membantu dan memudahkan mahasiswa Universitas
                Padjadjaran dalam mencari ataupun mengumumkan kehilangan barang.
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
