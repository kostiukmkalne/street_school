import React from "react";
import "./Education.scss";
import { Button } from "../../components/Button/Button";
import TrainingGroup from "./TrainingGroup";
import BenefitsList from "./BenefitsList";
import form from '../../assets/form.svg';
import telPlane from "../../assets/media/telPlane.svg";
import { trainingData, benefits } from "./data";

export const Education = () => {
  return (
    <div className="education">
      <div className="education__header">
        <div className="education__block">
          <img src={form} className="education__block-img" alt="palms-img" />
          <h2 className="education__block-title">Education Form</h2>
        </div>
        <h1 className="education__main--title">
          Choose your ideal learning format
        </h1>
      </div>

      <div className="education__form__group--main">
        {trainingData.map((data, index) => (
          <div key={index} className={`education__form__group--${index + 1}`}>
            <TrainingGroup {...data} />
            <Button className="education__button">
              <h3 className="education__button--text">
                Telegram-bot for communication
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
