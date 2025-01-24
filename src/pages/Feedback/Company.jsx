import React from "react";
import score from "../../assets/companies/score.svg";
import { useTranslation } from "react-i18next";

const Company = () => {
  const { t } = useTranslation();
  const feedbackData = t("feedback.company__feedback", { returnObjects: true });

  const isFeedbackArray = Array.isArray(feedbackData);
  console.log({ isFeedbackArray, feedbackData });

  return (
    <div className="feedback__company">
      {isFeedbackArray &&
        feedbackData.length > 0 &&
        feedbackData.map((item, index) => (
          <div key={index} className="feedback__info">
            <img
              src={item.logo}
              alt={`${t("item.company")} logo`}
              className="feedback__logo"
            />
            <h6 className="feedback__text">{t(item.text)}</h6>
            <div className="feedback__person">
              <img
                src={item.person.image}
                alt={item.person.name}
                className="feedback__person-img"
              />
              <div className="feedback__container">
                <h6 className="feedback__person-name">
                  {t(item.person.name)}
                </h6>
                <h6 className="feedback__person-position">
                  {t(item.person.position)}
                </h6>
              </div>
              <img src={score} alt="score" className="feedback__person-score" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Company;
