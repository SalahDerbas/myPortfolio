import React, { useState } from "react";

const Card = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
      <div className="box btn_shadow " style={{ cursor: "pointer" }}>
        <div className="img">
          <img src={props.image} alt="" onClick={toggleModal} />
        </div>
        <div className="category d_flex">
          <span onClick={toggleModal}>{props.category}</span>
          {/* <label>
              <i className="far fa-heart"></i> {props.totalLike}
            </label> */}
        </div>
        <div className="title">
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href="#popup" className="arrow" onClick={toggleModal}>
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content d_flex">
            <div className="modal-img left">
              <img src={props.image} alt="" />
            </div>
            <div className="modal-text right">
              <span>Featured - Design</span>
              <h1>{props.title}</h1>
              <p>{props.f1}</p>
              <p>{props.f2}</p>
              <p>{props.f3}</p>
              <p>{props.f4}</p>
              <p>{props.f5}</p>
              <p>{props.f6}</p>
              <p>{props.f7}</p>
              <p>{props.f8}</p>

              <div
                className="button f_flex mtop"
                style={{ marginTop: "100px" }}
              >
                <a href={props.github} target="_blank">
                  <button className="btn_shadow">
                    GITHUB<i class="fab fa-github"></i>
                  </button>
                </a>
                <a href={props.youtube} target="_blank">
                  <button className="btn_shadow">
                    YOUTUBE<i class="fab fa-youtube"></i>
                  </button>
                </a>
              </div>
              <button className="close-modal btn_shadow" onClick={toggleModal}>
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
