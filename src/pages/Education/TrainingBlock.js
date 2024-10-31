import React from "react";
import UserInfo from "./components/UserInfo";
import PriceInfo from "./components/PriceInfo";
import { Button } from "../../components/Button/Button";

const TrainingBlock = ({
  title,
  subtitle,
  duration,
  people,
  format,
  price,
  discounts,
}) => (
  <div className="education__form--pair">
    <div className="education__form--pair-title">
      <h3 className="education__form--pair-title-main">{title}</h3>
      <h6 className="education__form--pair-title-sub">{subtitle}</h6>
    </div>

    <div className="education__form--pair-user">
      <UserInfo image={duration.image} text={duration.text} />
      <UserInfo image={people.image} text={people.text} />
      <UserInfo image={format.image} text={format.text} />
    </div>

    <PriceInfo price={price} discounts={discounts} />

    <Button className="education__button">
      <h3 className="education__button-text">
        Telegram is a bot for communication
      </h3>
      <img
        src={duration.image}
        className="education__button-img"
        alt="telegram-img"
      />
    </Button>
  </div>
);

export default TrainingBlock;
