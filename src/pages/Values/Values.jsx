import React from "react";
import "./Values.scss";
import goals from "../../assets/goals.svg";
import { valuesData } from "./ValuesDate.js";

export const Values = () => (
  <div className="values">
    <div className="values__header">
      <div className="values__info">
        <img src={goals} className="values__info-img" alt="made-goals" />
        <h6 className="values__info-title">Our Values</h6>
      </div>
      <h1 className="values__main-title">Your Goal - Our Motivation</h1>
    </div>

    <div className="values__content">
      <div className="values__first-column">
        {renderPoint("Justice", valuesData[0].description, 0)}
      </div>

      <div className="values__second-column">
        {renderPoint("Industry", valuesData[1].description, 1)}
        {renderPoint("Creativity", valuesData[2].description, 2)}
      </div>

      <div className="values__third-column">
        {renderPoint("Order", valuesData[3].description, 3)}
        {renderPoint("Skill", valuesData[4].description, 4)}
      </div>
    </div>
  </div>
);

const renderPoint = (title, description, key) => (
  <div key={key} className="values__points-title">
    <h2 className="values__title">{title}</h2>
    <div className="values__text-description">{description}</div>
  </div>
);
