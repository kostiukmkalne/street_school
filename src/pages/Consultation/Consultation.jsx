import "./Consultation.scss";
import { Button } from "../../components/Button/Button";
import { useTranslation } from "react-i18next";
import phone from "../../assets/phone.svg";
import telPlane from "../../assets/media/telPlane.svg";

export const Consultation = () => {
  const { t } = useTranslation();

  return (
    <div className="consultation">
      <div className="consultation__header">
        <div className="consultation__info">
          <img src={phone} className="consultation__info-img" alt="phone" />
          <h6 className="consultation__info-title">{t("comunication.title")}</h6>
        </div>
        <h1 className="consultation__title">{t("comunication.subtitle")}</h1>
      </div>

      <Button
        className="consultation__button"
        onClick={() =>
          window.open("https://t.me/bot_street_english_school_bot", "_blank")
        }
      >
        {t("telegram.text")}
        <img
          src={telPlane}
          className="consultation__button-img"
          alt="telegram-img"
        />
      </Button>
    </div>
  );
};

