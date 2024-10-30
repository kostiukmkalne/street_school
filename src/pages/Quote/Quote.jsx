import "./Quote.scss";
import ludvic from "../../assets/quote/ludvic.svg";

export const Quote = () => (
  <div className="quote">
    <div className="quote__block">
      <div className="quote__text">
        "The limits of my language mean the limits of my world"
      </div>
      <div className="quote__person">
        <img src={ludvic} className="quote__person-img" alt="Ludvig-img" />
        <h3 className="quote__person-name">Ludwig Wittgenstein</h3>
        <h1 className="quote__person-position">Philosopher</h1>
      </div>
    </div>

    <div className="quote__main">
      Expand the possibilities of your communication, expand the possibilities
      of your world
    </div>
  </div>
);
