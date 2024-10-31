import React from "react";
import clock from "../../assets/icons/clock.svg";
import human from "../../assets/icons/human.svg";
import online from "../../assets/icons/online.svg";
import telPlane from "../../assets/icons/telegram.svg";
import BenefitsList from "./BenefitsList";
import UserInfoItem from "./UserInfoItem";
import Button from "./Button";

const EducationForm = () => (
  <div className="education__form--club">
    <div className="education__form--club-details">
      <div className="education__form--club-title">
        <h3 className="education__form--club-title-main">Speaking club</h3>
        <h6 className="education__form--club-title-subtitle">
          Personalized lessons with a teacher, adapted to your goals and
          language level.
        </h6>
      </div>

      <div className="education__form--club-user-info">
        <UserInfoItem image={clock} text="60 min" altText="Clock" />
        <UserInfoItem image={human} text="~" altText="Human" />
        <UserInfoItem image={online} text="Online" altText="Online" />
      </div>

      <div className="education__form--club-price">
        <h1 className="education__form--club-price-main">230.00₴</h1>
        <div className="education__form--club-price-discount">
          <h6>When paying for 5 sessions - 310.00₴</h6>
          <h6>When paying for 10 sessions - 300.00₴</h6>
          <h6>When paying for 15 sessions - 290.00₴</h6>
        </div>
      </div>

      <Button className="education__button">
        <h3 className="education__button--text">
          Telegram is a bot for communication
        </h3>
        <img src={telPlane} className="education__button--img" alt="Telegram" />
      </Button>
    </div>

    <div className="education__form--club-benefits">
      <BenefitsList />
    </div>
  </div>
);

export default EducationForm;
