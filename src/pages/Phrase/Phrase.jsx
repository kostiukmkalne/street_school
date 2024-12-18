import React from "react";
import "./Phrase.scss";
import ludvic from "../../assets/phrase/ludvic.svg";
import { useTranslation } from "react-i18next";

export const Phrase = () => {
  const { t } = useTranslation();
  const main_title = t("phrase.main_title", { returnObjects: true });

  return (
    <div className="phrase">
      <div className="phrase__container">
        <h6 className="phrase__text">{t("phrase.quote")}</h6>
        <div className="phrase__person">
          <img src={ludvic} className="phrase__person-img" alt="Ludvig-img" />
          <div className="phrase__person-block">
            <h6 className="phrase__person-name">{t("phrase.author.name")}</h6>
            <h6 className="phrase__person-position">
              {t("phrase.author.position")}
            </h6>
          </div>
        </div>
      </div>

      <h1 className="phrase__main">
        {main_title?.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </h1>
    </div>
  );
};
