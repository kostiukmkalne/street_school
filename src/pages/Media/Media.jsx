import "./Media.scss";
import logoBlock from "../../assets/logoBlock.svg";
import phone from "../../assets/phone.svg";
import { socialMediaLinks } from "./MediaData.js";

export const Media = () => (
  <div className="media">
    <div className="media__header">
      <img src={logoBlock} className="media__logo" alt="media-logo" />
      <div className="media__info">
        <img src={phone} className="media__info-img" alt="phone-img" />
        <h6 className="media__info-title">Contact us</h6>
      </div>
      <h1 className="media__title">Let's start your language journey!</h1>
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
