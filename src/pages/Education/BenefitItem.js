import React from "react";

const BenefitItem = ({ image, text }) => (
  <div className="education__benefits-item">
    <img
      src={image}
      className="education__benefits-item--img"
      alt="benefit-icon"
    />
    <h6 className="education__benefits-item--text">{text}</h6>
  </div>
);

export default BenefitItem;
