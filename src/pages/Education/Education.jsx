import React from "react";
import "./Education.scss";
import { Button } from "../../components/Button/Button";
import TrainingGroup from "./components/TrainingGroup";
import BenefitsList from "./components/BenefitsList";
import telPlane from "../../assets/education/telPlane.svg";
import { trainingData, benefits } from "./data"; // Adjust the path accordingly

const Education = () => {
  return (
    <div className="education">
      <h1 className="education__main--title">
        Choose your ideal learning format
      </h1>
      <div className="education__form__group--main">
        {trainingData.map((data, index) => (
          <div key={index} className={`education__form__group--${index + 1}`}>
            <TrainingGroup {...data} />
            <Button className="education__button">
              <h3 className="education__button--text">
                Telegram is a bot for communication
              </h3>
              <img
                src={telPlane}
                className="education__button--img"
                alt="telegram-img"
              />
            </Button>
          </div>
        ))}
      </div>
      <BenefitsList benefits={benefits} />
    </div>
  );
};

export default Education;
