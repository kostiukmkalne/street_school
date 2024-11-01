import "./Partners.scss";
import bag from "../../assets/bag.svg";
import { partnersData } from "./PartnersData";

export const Partners = () => (
  <div className="partners">
    <div className="partners__header">
      <div className="partners__info">
        <img src={bag} className="partners__info-img" alt="bag" />
        <h6 className="partners__info-title">Confidence of leaders</h6>
      </div>
      <h1 className="partners__title">Companies cooperating with us:</h1>
    </div>

    <div className="partners__container">
      {partnersData.map((partner, index) => (
        <img
          key={index}
          src={partner.src}
          className="partners__company-logo"
          alt={`${partner.alt} logo`}
        />
      ))}
    </div>
  </div>
);
