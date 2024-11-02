import React from "react";
import "./Navigation.scss";
import './NavigationDate.js';
import { navItems } from "./NavigationDate.js";
import arrdown from "../../assets/arrowDown.svg";

export const Navigation = () => (
  <nav className="nav">
    <ul className="nav__list">
      {navItems.map((item, index) => (
        <li className="nav__item" key={index}>
          <a className="nav__link" href={item.href}>
            {item.label}
            <img src={arrdown} className="nav__arrDown" alt="arrow-down" />
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
