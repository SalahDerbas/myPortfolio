import React from "react";
import "./Home.css";
import hero from "../pic/hero1.png";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>SALAH DERBAS</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter
                  words={[
                    " Software Engineering.",
                    " Full Stack Developer.",
                    " Backend Developer.",
                    " Frontend Developer",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              Building the code is done in all of its stages (analysis, design,
              planning ...) to personification the experiences and guide every
              intractive operation of the system.
              <br />I use design patterns to organize the code which helps in
              building a maintainable, extandable and well orginized code..
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>FIND ME WITH</h4>
                <div className="button">
                  <a
                    href="https://www.facebook.com/salah.drbas.1"
                    target="_blank"
                  >
                    <button
                      className="btn_shadow"
                      style={{ cursor: "pointer" }}
                    >
                      <i class="fab fa-facebook-f"></i>
                    </button>
                  </a>
                  <a
                    href="https://www.instagram.com/salahdrbas/"
                    target="_blank"
                  >
                    <button
                      className="btn_shadow"
                      style={{ cursor: "pointer" }}
                    >
                      <i class="fab fa-instagram"></i>
                    </button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/salah-derbas-654967228/"
                    target="_blank"
                  >
                    <button
                      className="btn_shadow"
                      style={{ cursor: "pointer" }}
                    >
                      <i class="fab fa-linkedin-in"></i>
                    </button>
                  </a>
                  <br />
                  <br />
                  <a href="https://github.com/SalahDerbas" target="_blank">
                    <button
                      className="btn_shadow"
                      style={{ cursor: "pointer" }}
                    >
                      <i class="fab fa-github"></i>
                    </button>
                  </a>

                  <a
                    href="https://www.youtube.com/channel/UCEYTgaou2YKbymbC0mUnAhw"
                    target="_blank"
                  >
                    <button
                      className="btn_shadow"
                      style={{ cursor: "pointer" }}
                    >
                      <i class="fab fa-youtube"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
