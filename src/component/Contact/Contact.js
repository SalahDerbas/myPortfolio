import React, { useState, useRef } from "react";
import contact1 from "./contact1.png";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (event) => {
    window.open("mailto:test@example.com");
    event.preventDefault();
    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
    );
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_ageok49", e.target, "UXLFm1j74nVr9KKSf")
      .then(
        (result) => {
          window.location.reload();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className="content d_flex">
            <div className="left">
              <div className="box box_shodow">
                <div className="img wrapper1">
                  <img src={contact1} alt="" />
                </div>
                <div className="details">
                  <h1 class="wrapper1">SALAH DERBAS</h1>
                  <div class="wrapper1">
                    <span class="badge">Software Engineering</span>
                  </div>
                  <br />
                  <br />
                  <br />
                  {/* <span className="w3-badge">
                    <p>Software Engineering</p>
                  </span> */}
                  <p>I am available for freelance work. </p>
                  <br />
                  <br />
                  <br />
                  <h4> Connect with me and call in to my account.</h4>
                  <p>Phone: &nbsp;&nbsp;&nbsp;00963936453165</p>
                  <p>Email: &nbsp;&nbsp;&nbsp;&nbsp;salahdrbas1@gmail.com</p>
                  <br />
                  <br />
                  <br />
                  <span>FIND WITH ME</span>
                  <div className="button f_flex">
                    <a
                      href="https://www.facebook.com/salah.drbas.1"
                      target="_blank"
                    >
                      <button className="btn_shadow">
                        <i className="fab fa-facebook-f"></i>
                      </button>
                    </a>
                    <a
                      href="https://www.instagram.com/salahdrbas/"
                      target="_blank"
                    >
                      <button className="btn_shadow">
                        <i className="fab fa-instagram"></i>
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

            <div className="right box_shodow">
              <form onSubmit={sendEmail}>
                <div className="f_flex">
                  <div className="input row">
                    <span>YOUR NAME</span>
                    <input
                      type="text"
                      name="fullname"
                      value={data.fullname}
                      onChange={InputEvent}
                    />
                  </div>
                  <div className="input row">
                    <span>PHONE NUMBER </span>
                    <input
                      type="number"
                      name="phone"
                      value={data.phone}
                      onChange={InputEvent}
                    />
                  </div>
                </div>
                <div className="input">
                  <span>EMAIL </span>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                  />
                </div>
                <div className="input">
                  <span>SUBJECT </span>
                  <input
                    type="text"
                    name="subject"
                    value={data.subject}
                    onChange={InputEvent}
                  />
                </div>
                <div className="input">
                  <span>YOUR MESSAGE </span>
                  <textarea
                    cols="30"
                    rows="10"
                    name="message"
                    value={data.message}
                    onChange={InputEvent}
                  ></textarea>
                </div>
                <button className="btn_shadow">
                  SEND MESSAGE <i className="fa fa-long-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
