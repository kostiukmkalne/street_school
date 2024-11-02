import "./Consultation.scss";
import { Button } from "../../components/Button/Button";
import phone from "../../assets/phone.svg";
import telPlane from "../../assets/media/telPlane.svg";

export const Consultation = () => (
  <div className="consultation">
    <div className="consultation__header">
      <div className="consultation__info">
        <img src={phone} className="consultation__infoImg" alt="phone" />
        <h6 className="consultation__infoTitle">Learn more</h6>
      </div>
      <h1 className="consultation__title">
        A free consultation is waiting for you!
      </h1>
    </div>

    <Button className="consultation__button">
      Telegram-bot for communication
      <a href="https://t.me/bot_street_english_school_bot">
        <img
          src={telPlane}
          className="consultation__buttonImg"
          alt="telegram plane"
        />
      </a>
    </Button>
  </div>
);
