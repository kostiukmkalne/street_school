import React from "react";
import "./Navigation.scss";
import arrdown from "../../assets/arrow-down.svg";

export const Navigation = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__item">
        <a className="nav__link" href="#about-us">
          About Us
          <img
            src={arrdown}
            className="arrdown"
            alt="arrow-down"
          />
        </a>
      </li>

      <li className="nav__item">
        <a className="nav__link" href="#feedbacks">
          Feedbacks
          <img
            src={arrdown}
            className="arrdown"
            alt="arrow-down"
          />
        </a>
      </li>

      <li className="nav__item">
        <a className="nav__link" href="#forms-of-education">
          Forms of Education
          <img
            src={arrdown}
            className="arrdown"
            alt="arrow-down"
          />
        </a>
      </li>

      <li className="nav__item">
        <a className="nav__link" href="#q-and-a">
          Q&A
          <img
            src={arrdown}
            className="arrdown"
            alt="arrow-down"
          />
        </a>
      </li>

      <li className="nav__item">
        <a className="nav__link" href="#contacts">
          Contacts
          <img
            src={arrdown}
            className="arrdown"
            alt="arrow-down"
          />
        </a>
      </li>
    </ul>
  </nav>
);
