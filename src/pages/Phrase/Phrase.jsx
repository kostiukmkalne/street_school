import "./Phrase.scss";
import ludvic from "../../assets/quote/ludvic.svg";

export const Phrase = () => (
  <div className="phrase">
    <div className="phrase__block">
      <div className="phrase__text">
        "The limits of my language mean the limits of my world"
      </div>
      <div className="phrase__person">
        <img src={ludvic} className="phrase__person-img" alt="Ludvig-img" />
        <h3 className="phrase__person-name">Ludwig Wittgenstein</h3>
        <h1 className="phrase__person-position">Philosopher</h1>
      </div>
    </div>

    <div className="phrase__main">
      Expand the possibilities of your communication, expand the possibilities
      of your world
    </div>
  </div>
);
