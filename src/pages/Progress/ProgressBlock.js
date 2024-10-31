import React from "react";

export const ProgressBlock = ({ imgSrc, alt, text }) => (
  <div className="progress__block">
    <img src={imgSrc} className="progress__block-img" alt={alt} />
    <h6 className="progress__block-text">{text}</h6>
  </div>
);
