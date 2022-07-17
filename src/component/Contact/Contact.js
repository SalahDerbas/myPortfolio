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
          <br />
          <br /> <br /> <br />
          <br />
          <br />
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
                  <h4> Connect with me :</h4>
                  <p>Phone: &nbsp;&nbsp;&nbsp;(+963) 936453165</p>
                  <p>Email: &nbsp;&nbsp;&nbsp;&nbsp;salahdrbas1@gmail.com</p>
                  <br />
                  <br />
                  <br />
                  <span>FIND ME WITH</span>
                  <div className="button f_flex">
                    <a
                      href="https://www.facebook.com/salah.drbas.1"
                      target="_blank"
                    >
                      <button
                        className="btn_shadow"
                        style={{ cursor: "pointer" }}
                      >
                        <i className="fab fa-facebook-f"></i>
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
                        <i className="fab fa-instagram"></i>
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
                    <a href="https://github.com/SalahDerbas" target="_blank">
                      <button
                        className="btn_shadow"
                        style={{ cursor: "pointer" }}
                      >
                        <i class="fab fa-github"></i>
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
        <div class="whatsapp">
          <a
            href="https://api.whatsapp.com/send?phone=963936453165"
            target="_blank"
          >
            <h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-whatsapp"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />{" "}
              </svg>
            </h5>
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
