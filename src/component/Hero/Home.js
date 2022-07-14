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
              I use diagrams and use cases as tools for overlapping engineering
              work with which to simplify experiences and guide every
              interaction. I do all the interaction and organization of the
              code, which helps the programming work and the modification of any
              incident that I can do .
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>FIND WITH ME</h4>
                <div className="button">
                  <a
                    href="https://www.facebook.com/salah.drbas.1"
                    target="_blank"
                  >
                    <button className="btn_shadow">
                      <i class="fab fa-facebook-f"></i>
                    </button>
                  </a>
                  <a
                    href="https://www.instagram.com/salahdrbas/"
                    target="_blank"
                  >
                    <button className="btn_shadow">
                      <i class="fab fa-instagram"></i>
                    </button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/salah-derbas-654967228/"
                    target="_blank"
                  >
                    <button className="btn_shadow">
                      <i class="fab fa-linkedin-in"></i>
                    </button>
                  </a>
                  <br />
                  <br />
                  <a href="https://github.com/SalahDerbas" target="_blank">
                    <button className="btn_shadow">
                      <i class="fab fa-github"></i>
                    </button>
                  </a>

                  <a
                    href="https://www.youtube.com/channel/UCEYTgaou2YKbymbC0mUnAhw"
                    target="_blank"
                  >
                    <button className="btn_shadow">
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
