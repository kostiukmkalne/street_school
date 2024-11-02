import React, { useState } from "react";
import "./Header.scss";
import { Navigation } from "../Navigation/Navigation";
import logo from "../../assets/logoBlack.svg";
import LanguageSwitchButton from "./LanguageSwitchButton.js";

export const Header = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  const handleLanguageChange = () => {
    setIsEnglish((prev) => !prev);
  };

  return (
    <header className="header">
      <a href="#header">
        <img src={logo} className="header__logo" alt="Company logo" />
      </a>

      <Navigation className="header__nav" />

      <div className="header__langBlock">
        <LanguageSwitchButton
          onLanguageChange={handleLanguageChange}
          isEnglish={isEnglish}
        />
      </div>
    </header>
  );
};
