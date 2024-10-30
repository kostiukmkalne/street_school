import React from "react";
import "./Feedback.scss";
import thoughts from "../../assets/thoughts.svg";
import score from "../../assets/companies/score.svg";
import { companyFeedback } from './company.js';
import { clientFeedback } from './client.js'
import { Button } from "../../components/Button/Button";

export const Feedback = () => {
  return (
    <div className="feedback">
      <div className="feedback__header">
        <div className="feedback__header-block">
          <img
            src={thoughts}
            className="feedback__header-block-img"
            alt="thoughts"
          />
          <h2 className="feedback__header-title">Feedback about us</h2>
        </div>
        <h1 className="feedback__main-title">Feedback on our success</h1>
      </div>

      <Button />

      <div className="feedback__company-feedbacks">
        {companyFeedback.map((item, index) => (
          <div key={index} className="feedback__company">
            <img
              src={item.logo}
              alt={`${item.company} logo`}
              className="feedback__company-logo"
            />
            <p className="feedback__company-text">{item.text}</p>
            <div className="feedback__company-person">
              <img
                src={item.person.image}
                alt={item.person.name}
                className="feedback__person-img"
              />
              <h6 className="feedback__person-name">{item.person.name}</h6>
              <p className="feedback__person-position">
                {item.person.position}
              </p>
              <img src={score} alt="score" className="feedback__person-score" />
            </div>
          </div>
        ))}
      </div>

      <div className="feedback__client-feedbacks">
        {clientFeedback.map((feedback, index) => (
          <div key={index} className="feedback__client">
            <p className="feedback__client-text">{feedback.text}</p>
            <div className="feedback__client-info">
              <img
                src={feedback.person.image}
                alt={feedback.person.name}
                className="feedback__client-img"
              />
              <h6 className="feedback__client-name">{feedback.person.name}</h6>
              <img src={score} alt="score" className="feedback__client-score" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
