import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="box btn_shadow">
        <img
          className="box_img"
          src={props.image}
          alt=""
          // style={{ height: "175px", width: "350px", marginLeft: "40px" }}
        />
        <div className="heading text-center">
          <h2>{props.title}</h2>
        </div>

        <p>{props.desc}</p>
        {/* <a href='/'>
          <i className='fas fa-arrow-right'></i>
        </a> */}
      </div>
    </>
  );
};

export default Card;
