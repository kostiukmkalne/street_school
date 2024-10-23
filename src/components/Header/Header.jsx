import React from "react";
import "./Header.scss";
import Navigation from "../Navigation/Navigation";
import logo from "../../assets/logo.svg";
import eng from "../../assets/en-lang.svg";
import ua from "../../assets/ua-lang.svg";

export const Header = () => (
  <header className="header">
    <a href="#header">
      <img src={logo} className="logo" alt="logo" />
    </a>

    <Navigation className="navigation" />

    <div className="language-block">
      <a href="#home">
        <img src={eng} className="en-language" alt="#eng" />
      </a>

      <a href="#home">
        <img src={ua} className="ua-language" alt="#ua" />
      </a>
    </div>
  </header>
);
