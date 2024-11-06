import "./Team.scss";
import palms from "../../assets/palms.svg";
import { images } from "./TeamImages";

export const Team = () => (
  <div className="team">
    <div className="team__titles">
      <div className="team__blog">
        <img src={palms} className="team__blog-img" alt="palms-img" />
        <h2 className="team__blog-title">Get to know Us</h2>
      </div>
      <h1 className="team__main-title">Big Team for Big Results</h1>
    </div>

    <div className="team__photos">
      <div className="team__column">
        <div className="team__photo">
          <img src={images.hands.src} alt={images.hands.alt} />
        </div>
        <div className="team__photo">
          <img src={images.group.src} alt={images.group.alt} />
        </div>
      </div>

      <div className="team__column">
        <div className="team__photo">
          <img src={images.person.src} alt={images.person.alt} />
        </div>
        <div className="team__photo">
          <img src={images.book.src} alt={images.book.alt} />
        </div>
      </div>

      <div className="team__column">
        <div className="team__photo">
          <img src={images.phone.src} alt={images.phone.alt} />
        </div>
        <div className="team__photo">
          <img src={images.lucy.src} alt={images.lucy.alt} />
        </div>
        <div className="team__photo">
          <a href="https://www.instagram.com/street_english_school_online?igsh=MTZqNmhmNmh0MWUxcQ==">
            <img src={images.insta.src} alt={images.insta.alt} />
          </a>
        </div>
      </div>
    </div>
  </div>
);
