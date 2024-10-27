import arrDown from "../../assets/arrowDown.svg";

const MissionBlock = ({ title, text }) => (
  <div className="mission">
    <h1 className="mission__title">{title}</h1>
    <div className="mission__block">
      <img src={arrDown} className="mission__img" alt="arrow-down" />
      <p className="mission__text">{text}</p>
    </div>
  </div>
);

export const Mission = () => (
  <div className="mission">
    <MissionBlock
      title="Our Mission"
      text="Teaching English is fun for the student, fun for yourself, and remember that the most important thing is to help realize the goals and dreams of our students."
    />
    <MissionBlock
      title="Our Vision"
      text="To teach Ukrainians English at the B2 level and above so that they can use it as a tool to achieve their goals in business and personal affairs."
    />
  </div>
);
