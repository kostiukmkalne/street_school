import React from "react";

const UserInfo = ({ image, text }) => (
  <div className="education__form--individual-user-info">
    <img
      src={image}
      className="education__form--individual-user-img"
      alt="User info"
    />
    <h6 className="education__form--individual-user-text">{text}</h6>
  </div>
);

export default UserInfo;
