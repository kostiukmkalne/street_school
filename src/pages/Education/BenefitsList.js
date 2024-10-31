import React from "react";
import done from "../../assets/education/done.svg";

const BenefitsList = ({ benefits }) => {
  return (
    <div className="education__benefits">
      {benefits.map((text, index) => (
        <div key={index} className="education__benefit-item">
          <img
            src={done}
            className="education__benefit-item--img"
            alt="benefit-icon"
          />
          <h6 className="education__benefit-item--text">{text}</h6>
        </div>
      ))}
    </div>
  );
};

export default BenefitsList;
