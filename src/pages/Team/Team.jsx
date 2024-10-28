import "./Team.scss";
import palms from "../../assets/palms.svg";
import * as teamImages from "./index.js";

const images = [
  { src: teamImages.hands, alt: "team-hands" },
  { src: teamImages.group, alt: "team-group" },
  { src: teamImages.person, alt: "team-person" },
  { src: teamImages.book, alt: "team-book" },
  { src: teamImages.phone, alt: "team-phone" },
  { src: teamImages.lucy, alt: "team-Lucy" },
  {
    src: teamImages.insta,
    alt: "instagram",
    link: "https://www.instagram.com/street_english_school_online?igsh=MTZqNmhmNmh0MWUxcQ==",
  },
];

export const Team = () => (
  <div className="team__page">
    <div className="team__titles">
      <div className="team__blog">
        <img src={palms} className="team__blog-img" alt="Team blog logo" />
        <h2 className="team__blog-title">Get to know Us</h2>
      </div>
      <h1 className="team__main-title">Big Team for Big Results</h1>
    </div>

    <div className="team__photos">
      {images.map((image, index) => (
        <div key={index} className={`team__photo team__photo-${index + 1}`}>
          {image.link ? (
            <a href={image.link}>
              <img src={image.src} alt={image.alt} />
            </a>
          ) : (
            <img src={image.src} alt={image.alt} />
          )}
        </div>
      ))}
    </div>
  </div>
);
