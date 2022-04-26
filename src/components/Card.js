import React from "react";

const Card = ({ image, text, heading }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="icon-box d-flex justify-content-center align-items-center mb-3 shadow-lg">
        <img className="w-75" src={`assets/img/${image}`} />
      </div>
      <h6>{heading}</h6>
      <p className="text-center px-lg-5">{text}</p>
    </div>
  );
};

export default Card;
