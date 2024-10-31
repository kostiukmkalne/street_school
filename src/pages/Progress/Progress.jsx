import "./Progress.scss";
import { progressData } from "./ProgressData";
import medal from "../../assets/medal.svg";
import { ProgressBlock } from "./ProgressBlock.js";

export const Progress = () => (
  <div className="progress">
    <div className="progress__header">
      <div className="progress__info">
        <img src={medal} className="progress__info-img" alt="medal-img" />
        <h6 className="progress__info-title">Why choose us?</h6>
      </div>
      <h1 className="progress__title">We help you achieve more</h1>
    </div>

    <div className="progress__container">
      {progressData.map((item, index) => (
        <ProgressBlock
          key={index}
          imgSrc={item.imgSrc}
          alt={item.alt}
          text={item.text}
        />
      ))}
    </div>
  </div>
);
