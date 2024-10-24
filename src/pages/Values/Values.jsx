import "./values.scss";
import goals from "../../assets/goals.svg";
import valueData from "../../Json/ValueDate";

export const Values = () => (
  <section className="values">
    <header className="values__titles">
      <div className="values__text">
        <img src={goals} className="values__goals" alt="made-goals" />
        <h6 className="values__pre-title">Our Values</h6>
      </div>
      <h1 className="values__main-title">Your Goal - Our Motivation</h1>
    </header>

    <article className="values__points">
      {valueData.map((value, index) =>
        renderPoint(value.title, value.description, index)
      )}
    </article>
  </section>
);

const renderPoint = (title, description, key) => (
  <div key={key} className="values__points-title">
    {title}
    <div className="values__text-description">
      {description}
    </div>
  </div>
);
