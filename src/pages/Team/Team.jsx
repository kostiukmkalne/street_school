import React from "react";
import "./Team.scss";
import palms from "../../assets/palms.svg";
import { useTranslation } from "react-i18next";
import { images } from "./TeamImg.js";

export const Team = () => {
  const { t } = useTranslation();

  return (
    <div className="team">
      <div className="team__titles">
        <div className="team__blog">
          <img src={palms} className="team__blog-img" alt="palm-img" />
          <h6 className="team__blog-title">{t("team.title")}</h6>
        </div>
        <h1 className="team__main-title">{t("team.subtitle")}</h1>
      </div>

      <div className="team__photos">
        <div className="team__column">
          <div className="team__photo">
            <img src={images.hands.src} alt="hands-img" />
          </div>
          <div className="team__photo">
            <img src={images.group.src} alt="group-img" />
          </div>
        </div>

        <div className="team__column">
          <div className="team__photo">
            <img src={images.person.src} alt="person-img" />
          </div>
          <div className="team__photo">
            <img src={images.book.src} alt="book-img" />
          </div>
        </div>

        <div className="team__column">
          <div className="team__photo">
            <img src={images.phone.src} alt="phoneimg" />
          </div>
          <div className="team__photo">
            <img src={images.lucy.src} alt="lucy-img" />
          </div>
          <div className="team__photo">
            <a href="https://www.instagram.com/street_english_school_online?igsh=MTZqNmhmNmh0MWUxcQ==">
              <img src={images.insta.src} alt="instagram-img" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
