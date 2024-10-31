import React from "react";
import clock from "../../assets/icons/clock.svg";
import human from "../../assets/icons/human.svg";
import offline from "../../assets/icons/offline.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import linkedIn from "../../assets/icons/linkedin.svg";
import telegram from "../../assets/icons/telegram.svg";
import telPlane from "../../assets/icons/telegram.svg";
import done from '../../assets/education/done.svg'
import Button from "./Button";
import UserInfoItem from "./UserInfoItem";
import BenefitItem from "./BenefitItem";
import ContactMedia from "./ContactMedia";

const CorporateTraining = () => {
  const contactIcons = [
    { src: facebook, alt: "Facebook" },
    { src: instagram, alt: "Instagram" },
    { src: linkedIn, alt: "LinkedIn" },
    { src: telegram, alt: "Telegram" },
  ];

  const benefits = [
    "Materials are stored on the Padlet virtual platform (access 24/7)",
    "Kalyna clickable platform",
    "Learning words with Quizlet",
    "Setting the learning goal using the SMART and GROW methods",
    "Adaptation of the educational process according to the DISC system",
    "An individual table in GoogleSheets with a tracker of your progress",
  ];

  return (
    <div className="education__corporate-training">
      <div className="education__corporate-training--details">
        <div className="education__corporate-training--title">
          <h3 className="education__corporate-training--title-main">
            Corporate training
          </h3>
          <h6 className="education__corporate-training--title-subtitle">
            Personalized lessons with a teacher, adapted to your goals and
            language level.
          </h6>
        </div>

        <div className="education__corporate-training--user-info">
          <UserInfoItem image={clock} text="60 min" altText="Clock" />
          <UserInfoItem image={human} text="~" altText="Human" />
          <UserInfoItem image={offline} text="Offline" altText="Offline" />
        </div>

        <div className="education__corporate-training--contact">
          <div className="education__corporate-training--contact-block">
            <h3 className="education__corporate-training--contact-main">
              Individually
            </h3>
            <h1 className="education__corporate-training--contact-message">
              Write to us in one of the messengers
            </h1>
          </div>

          <ContactMedia icons={contactIcons} />
        </div>

        <Button className="education__button">
          <h3 className="education__button--text">
            Telegram is a bot for communication
          </h3>
          <img
            src={telPlane}
            className="education__button--img"
            alt="Telegram"
          />
        </Button>
      </div>

      <div className="education__corporate-training--benefits">
        {benefits.map((benefit, index) => (
          <BenefitItem key={index} image={done} text={benefit} />
        ))}
      </div>
    </div>
  );
};

export default CorporateTraining;
