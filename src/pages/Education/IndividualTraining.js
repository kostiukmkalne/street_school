import React from "react";
import clock from "../../assets/education/clock.svg";
import human from "../../assets/education/human.svg";
import online from "../../assets/education/online.svg";
import telPlane from "../../assets/education/telPlane.svg";
import { Button } from "../../components/Button/Button";
import UserInfo from "./components/UserInfo";
import PriceInfo from "./components/PriceInfo";

const IndividualTraining = () => (
  <div className="education__form--individual">
    <div className="education__form--individual-title">
      <h3 className="education__form--individual-title-main">
        Individual training online
      </h3>
      <h6 className="education__form--individual-title-subtitle">
        Personalized lessons with a teacher, adapted to your goals and language
        level.
      </h6>
    </div>

    <div className="education__form--individual-user-info">
      <UserInfo image={clock} text="60 min" />
      <UserInfo image={human} text="1 person" />
      <UserInfo image={online} text="Online" />
    </div>

    <PriceInfo />

    <Button className="education__button">
      <h3 className="education__button--text">
        Telegram is a bot for communication
      </h3>
      <img src={telPlane} className="education__button--img" alt="Telegram" />
    </Button>
  </div>
);

export default IndividualTraining;
