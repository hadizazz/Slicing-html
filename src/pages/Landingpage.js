import React from "react";
import Navbar from "../components/Navbar";
import { AiOutlineArrowRight } from "react-icons/ai";
import Footer from "../components/Footer";
import kolektive from "../images/kolektive.png";
import { FaTag } from "react-icons/fa";
import image from "../images/personal.jpg"

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

        {/* <div>
          <div className="flex item-center">
            <h3 class="font-semibold text-gray-700 mt-5"> Project </h3>
          </div>

          <div class="mt-10 grid grid-rows-auto grid-cols-1 md:grid-rows2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 gap-10">
            <div>
              <div class="w-auto rounded-3x1 shadow">
                <img
                  src="../images/kolektive.png"
                  class="object-cover rounded-t-3x1 w-full h-auto"
                />
                <div class="p-4 h-56 md:h-52 lg:h-64 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <h5 class="font-bold">Kolektive</h5>
                    </div>
                    <div className="flex mt-2">
                      <p class="ml-3 text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Pariatur iure dolore deserunt repudiandae nostrum
                        repellat, quos tempore assumenda, eos voluptatibus alias
                        numquam, sit
                      </p>
                    </div>
                  </div>
                  <a
                    target="_blank"
                    href="https://kolektive.netlify.app/"
                    class="flex justify-between items-center bg-blue-500 hover:bg-blue-400 px-7 py-2 rounded-full"
                  >
                    <h6 class="text-white text-center">See Project</h6>
                    <AiOutlineArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
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
            {/* <button type="submit" >
              Create
            </button> */}
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
