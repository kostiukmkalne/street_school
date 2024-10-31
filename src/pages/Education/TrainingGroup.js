import React from "react";

const TrainingGroup = ({
  title,
  subtitle,
  duration,
  people,
  format,
  price,
  discounts,
}) => (
  <div className="education__form--group">
    <div className="education__form--group-title">
      <h3 className="education__form--group-title-main">{title}</h3>
      <h6 className="education__form--group-title-sub">{subtitle}</h6>
    </div>

    <div className="education__form--group-user">
      {[duration, people, format].map((info, index) => (
        <div key={index} className="education__form--group-user-info">
          <img
            src={info.image}
            className="education__form--group-user-img"
            alt={info.alt}
          />
          <h6 className="education__form--group-user-text">{info.text}</h6>
        </div>
      ))}
    </div>

    <div className="education__form--group-price">
      <h1 className="education__form--group-price-main">{price}</h1>
      <div className="education__form--group-price-discount">
        {discounts.map((discount, index) => (
          <h6
            key={index}
            className={`education__form--group-price-discount-${index + 1}`}
          >
            {discount}
          </h6>
        ))}
      </div>
    </div>
  </div>
);

export default TrainingGroup;
