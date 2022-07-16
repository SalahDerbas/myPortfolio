import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import TestimonialApi from "./TestimonialApi";

const Testimonial = () => {
  const [data, setdata] = useState(TestimonialApi);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, data]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <>
    
      <section className="Testimonial" id="skills">
        <div className="container">
        <br/>

          <div className="heading text-center" style={{ marginTop: "217px" }}>
            <h4>WHAT SKILLS SAY</h4>
            <h1>SKILLS</h1>

            <div class="list-group w-50">
            
              <a href="#" class="list-group-item list-group-item-action">
                  
                  <span class="badge1 rounded-pill bg-primary float-end">HTML/HTML5</span>
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                  <span class="badge1 rounded-pill bg-primary float-end">CSS/CSS3</span>
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                  <span class="badge1 rounded-pill bg-primary float-end">Bootstrap</span>
              </a>
          </div>
          </div>
          
          <div className="slide">
            {/*{TestimonialApi.map((val, index) => {
              return <Slide key={index} image={val.image} design={val.design} name={val.name} offcer={val.offcer} post={val.post} date={val.date} desc={val.desc} />
            })}*/}
            
            <div class="wrapper text-center">
              <div>
              <span class="badge1"><p class="" style={{color: "white"}}>HTML/HTML5</p></span>
              </div>
              <br />
              <div>
              <span class="badge1"><p style={{color: "white"}}>CSS/CSS3</p></span>
              </div>
              <br />
              <div>
              <span class="badge1"><p style={{color: "white"}}>Bootstrap</p></span>
              </div>
              {/* <div class="skill">
                <div class="skill-bar skill1">
                  <span class="skill-count1">85%</span>
                </div>
              </div> */}
              {/* <div class="skill">
                <p>CSS/CSS3</p>
                <div class="skill-bar skill2">
                  <span class="skill-count2">85%</span>
                </div>
              </div> */}
              {/* <div class="skill">
                <p>Bootstrap</p>
                <div class="skill-bar skill3">
                  <span class="skill-count3">85%</span>
                </div>
              </div> */}
              <div class="skill">
                <p>JavaScript</p>
                <div class="skill-bar skill4">
                  <span class="skill-count4">70%</span>
                </div>
              </div>
              <div class="skill">
                <p>Typescript</p>
                <div class="skill-bar skill4">
                  <span class="skill-count4">70%</span>
                </div>
              </div>

              <div class="skill">
                <p>Ajax</p>
                <div class="skill-bar skill4">
                  <span class="skill-count4">70%</span>
                </div>
              </div>
              <div class="skill">
                <p>AWS</p>
                <div class="skill-bar skill7">
                  <span class="skill-count7">50%</span>
                </div>
              </div>
              <div class="skill">
                <p>SQL</p>
                <div class="skill-bar skill4">
                  <span class="skill-count4">70%</span>
                </div>
              </div>
              <div class="skill">
                <p>Jest/Testing</p>
                <div class="skill-bar skill4">
                  <span class="skill-count4">70%</span>
                </div>
              </div>
            </div>

            <div class="wrapper">
              <div class="skill">
                <p>PHP/Laravel</p>
                <div class="skill-bar skill5">
                  <span class="skill-count5">80%</span>
                </div>
              </div>

              <div class="skill">
                <p>RestFull API</p>
                <div class="skill-bar skill6">
                  <span class="skill-count6">60%</span>
                </div>
              </div>

              <div class="skill">
                <p>React JS/ Redux</p>
                <div class="skill-bar skill4">
                  <span class="skill-count4">70%</span>
                </div>
              </div>
              <div class="skill">
                <p>PrimeReact UI</p>
                <div class="skill-bar skill4">
                  <span class="skill-count4">70%</span>
                </div>
              </div>
              <div class="skill">
                <p>MySQL</p>
                <div class="skill-bar skill5">
                  <span class="skill-count5">80%</span>
                </div>
              </div>

              <div class="skill">
                <p>Firebase</p>
                <div class="skill-bar skill6">
                  <span class="skill-count6">60%</span>
                </div>
              </div>
              <div class="skill">
                <p>Agile</p>
                <div class="skill-bar skill3">
                  <span class="skill-count3">75%</span>
                </div>
              </div>

              <div class="skill">
                <p>Linux</p>
                <div class="skill-bar skill3">
                  <span class="skill-count3">75%</span>
                </div>
              </div>
              <div class="skill">
                <p>C/C++</p>
                <div class="skill-bar skill3">
                  <span class="skill-count3">75%</span>
                </div>
              </div>
            </div>
            {/* <div class="wrapper">
              <div class="skill">
                <p>Agile</p>
                <div class="skill-bar skill3">
                  <span class="skill-count3">75%</span>
                </div>
              </div>

              <div class="skill">
                <p>Linux</p>
                <div class="skill-bar skill3">
                  <span class="skill-count3">75%</span>
                </div>
              </div>
              <div class="skill">
                <p>AWS</p>
                <div class="skill-bar skill7">
                  <span class="skill-count7">50%</span>
                </div>
              </div>
              <div class="skill">
                <p>SQL</p>
                <div class="skill-bar skill4">
                  <span class="skill-count4">70%</span>
                </div>
              </div>
              <div class="skill">
                <p>Jest/Testing</p>
                <div class="skill-bar skill4">
                  <span class="skill-count4">70%</span>
                </div>
              </div>
              <div class="skill">
                <p>C/C++</p>
                <div class="skill-bar skill3">
                  <span class="skill-count3">75%</span>
                </div>
              </div>
            </div> */}

            {/* {data.map((value, valueIndex) => {
              return <Slide key={value.id} {...value} valueIndex={valueIndex} index={index} />
            })}

            <div className='slide_button'>
              <button className='btn_shadow prev_btn' onClick={() => setIndex(index - 1)}>
                <i class='fas fa-arrow-left'></i>
              </button>
              <button className='btn_shadow next_btn' onClick={() => setIndex(index + 1)}>
                <i class='fas fa-arrow-right'></i>
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
