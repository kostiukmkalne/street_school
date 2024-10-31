import React from "react";

const ContactMedia = ({ icons }) => (
  <div className="education__contact-media">
    {icons.map((icon, index) => (
      <img
        key={index}
        src={icon.src}
        className="education__contact-media--img"
        alt={icon.alt}
      />
    ))}
  </div>
);

export default ContactMedia;
