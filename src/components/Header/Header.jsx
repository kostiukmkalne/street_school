import React from "react";
import "./Header.scss";
import { Navigation } from "../Navigation/Navigation";
import { Button } from '../Button/Button';
import logo from "../../assets/logoBlack.svg";
import eng from "../../assets/engLang.svg";
import ua from "../../assets/uaLang.svg";

export const Header = () => (
  <header className="header">
    <a href="#header">
      <img src={logo} className="header__logo" alt="logo" />
    </a>

    <Navigation className="header__nav" />

    <div className="header__lang-block">
      <Button
        className="header__lang-button"
      >
        <img
          src={eng}
          alt="english-language"
        />
      </Button>

      <Button
        className="header__lang-button"
      >
        <img
          src={ua}
          alt="ukrainian-language"
        />
      </Button>
    </div>
  </header>
);
