import React from "react";
import Navbar from "../components/Navbar";
import { AiOutlineArrowRight } from "react-icons/ai";
import Footer from "../components/Footer"
export default function landingpage() {
  return (
    <div className="body">
      <Navbar />
      <div className="heroLP">
        <div className="boxHeading">
          <p>Product Designer</p>
          <span>Hello,</span>
          <h1>i'm Sam Simone.</h1>
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
      <section id="project">
        <h1 class="title">Project</h1>
        <div class="content">
          <div class="box ">
            <h2>lorem</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              iure dolore deserunt repudiandae nostrum repellat, quos tempore
              assumenda, eos voluptatibus alias numquam, sit
            </p>
            <button>
              See Project{" "}
              <span>
                <AiOutlineArrowRight />
              </span>
            </button>
          </div>
          <div class="box ">
            <h2>Lorem</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              iure dolore deserunt repudiandae nostrum repellat, quos tempore
              assumenda, eos voluptatibus alias numquam, sit
            </p>
            <button>
              See Project{" "}
              <span>
                <AiOutlineArrowRight />
              </span>
            </button>
          </div>
          <div class="box">
            <h2>Lorem</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
              iure dolore deserunt repudiandae nostrum repellat, quos tempore
              assumenda, eos voluptatibus alias numquam, sit
            </p>
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
              <label for="name" >Name </label>
              <input type="text" id="name" className="input"/>
            </div>
            <div className="forms">
              <label for="email">Email</label>
              <input type="email" id="email" className="input"/>
            </div>
            <div className="forms">
              <label for="Message">Message </label>
              <textarea id="message" className="input" name="message" style={{height:"200px"}}/>
            </div>
            <input type="submit" value="submit"></input>
            {/* <button type="submit" >
              Create
            </button> */}
          </form>
        </div>
      </section>
      <Footer/>
    </div>
  );
}
