import React from "react";
import "./Navigation.scss";
import arrdown from "../../assets/arrowDown.svg";

const navItems = [
  { href: "#about-us", label: "About Us" },
  { href: "#feedbacks", label: "Feedbacks" },
  { href: "#forms-of-education", label: "Forms of Education" },
  { href: "#q-and-a", label: "Q&A" },
  { href: "#contacts", label: "Contacts" },
];

export const Navigation = () => (
  <nav className="nav">
    <ul className="nav__list">
      {navItems.map((item, index) => (
        <li className="nav__item" key={index}>
          <a className="nav__link" href={item.href}>
            {item.label}
            <img src={arrdown} className="arrdown" alt="arrow-down" />
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
