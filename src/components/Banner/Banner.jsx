import React from "react";
import "./Banner.scss";
import { Button } from "../Button/Button";
// import { BlueText } from '../../components/BlueText/BlueText.jsx';
import { useTranslation } from "react-i18next";
import { imgItems } from "./dataImg.js";

export const Banner = () => {
  const { t } = useTranslation();

  return (
    <div className="banner-page">
      <div className="banner">
        <div className="banner__titles">
          <div className="banner__block-clients">
            <img
              src={imgItems.stars}
              className="banner__stars-img"
              alt="stars-img"
            />
            <h6 className="banner__text">{t("banner.title")}</h6>
          </div>

          <h1 className="banner__main-title">
            {t("banner.main_title", { returnObjects: true }).map(
              (line, index) => (
                <React.Fragment key={index}>
                  {index === 2 ? ( // Це третій рядок (з англійською!)
                    <span className="banner__highlight">{line}</span> // Додаємо спеціальний стиль
                  ) : (
                    line
                  )}
                  <br />
                </React.Fragment>
              )
            )}
          </h1>

          <h6 className="banner__explanation">
            {t("banner.explanation", { returnObjects: true }).map(
              (line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              )
            )}
          </h6>
        </div>

        <Button className="banner__button" aria-label="banner-button">
          {t("banner.button")}
          <img
            src={imgItems.arrdown}
            className="banner__batton-img"
            alt="arrow-down"
          />
        </Button>
      </div>

      <div className="video">
        {imgItems.video && (
          <video
            controls
            autoPlay
            muted
            className="video__size"
            src={imgItems.video}
            poster={imgItems.videoImg}
          />
        )}
      </div>
    </div>
  );
};
