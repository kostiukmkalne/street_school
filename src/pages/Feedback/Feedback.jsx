import React, { useState } from "react";
import "./Feedback.scss";
import thoughts from "../../assets/thoughts.svg";
import Company from "./Company.jsx";
import Client from "./Client.jsx";
import { Button } from "../../components/Button/Button.jsx";
import { useTranslation } from "react-i18next";

export const Feedback = () => {
  const { t } = useTranslation();
  const [selectedFeedback, setSelectedFeedback] = useState("client");

  const handleToggle = (type) => {
    setSelectedFeedback(type);
  };

  return (
    <div className="feedback">
      <div className="feedback__header">
        <div className="feedback__cluster">
          <img
            src={thoughts}
            className="feedback__cluster-img"
            alt="thoughts"
          />
          <h6 className="feedback__cluster-title">{t("feedback.title")}</h6>
        </div>
        <h1 className="feedback__main-title">{t("feedback.subtitle")}</h1>
      </div>

      <div className="feedback__switch">
        <Button
          className={`feedback__button ${
            selectedFeedback === "company" ? "active" : ""
          }`}
          onClick={() => handleToggle("company")}
        >
          {t("feedback.buttons.company.text")}
        </Button>
        <Button
          className={`feedback__button ${
            selectedFeedback === "client" ? "active" : ""
          }`}
          onClick={() => handleToggle("client")}
        >
          {t("feedback.buttons.client.text")}
        </Button>
      </div>

      {selectedFeedback === "client" ? <Client /> : <Company /> }
    </div>
  );
};
