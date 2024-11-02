import React from "react";

const LanguageSwitchButton = ({ onLanguageChange, isEnglish }) => (
  <div className="switch-button">
    <input
      className="switch-button-checkbox"
      type="checkbox"
      id="lang-switch"
      checked={isEnglish}
      onChange={onLanguageChange}
    />
    <label className="switch-button-label" htmlFor="lang-switch">
      <span className="switch-button-label-span">
        {isEnglish ? "EN" : "UA"}
      </span>
    </label>
  </div>
);

export default LanguageSwitchButton;
