import "./Media.scss";
import logoBlock from "../../assets/logoBlock.svg";
import phone from "../../assets/phone.svg";
import { socialMediaLinks } from "./MediaData.js";
import { useTranslation } from "react-i18next";

export const Media = () => {
  const { t } = useTranslation();

  return (
    <div className="media">
      <div className="media__header">
        <img src={logoBlock} className="media__logo" alt="media-logo" />
        <div className="media__info">
          <img src={phone} className="media__info-img" alt="phone-img" />
          <h6 className="media__info-title">{t("media.title")}</h6>
        </div>
        <h1 className="media__title">{t("media.subtitle")}</h1>
      </div>

      <div className="media__social">
        {socialMediaLinks.map(({ href, img, alt }) => (
          <a key={alt} href={href} target="_blank" rel="noopener noreferrer">
            <img src={img} className="media__icon" alt={alt} />
          </a>
        ))}
      </div>
    </div>
  );
};
