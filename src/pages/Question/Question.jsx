import React, { useState } from "react";
import "./Question.scss";
import { QuestionData } from './QuestionDate.js';
import questionMark from "../../assets/questionMark.svg";
import plus from "../../assets/question/plus.svg";
import minus from "../../assets/question/minus.svg";

export const Question = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => setSelected(selected === i ? null : i);

  return (
    <div className="question">
      <div className="question__header">
        <div className="question__info">
          <img
            src={questionMark}
            className="question__info-img"
            alt="question mark"
          />
          <h6 className="question__info-title">Questions & Answers</h6>
        </div>
        <h1 className="question__main-title">We answer your questions</h1>
      </div>

      <div className="question__container">
        {QuestionData.map((item, i) => (
          <div className="question__item" key={i}>
            <hr />
            <div className="question__item-title" onClick={() => toggle(i)}>
              <h2 className="question__item-title-text">{item.question}</h2>
              <img
                src={selected === i ? minus : plus}
                alt={selected === i ? "minus" : "plus"}
              />
            </div>
            <div
              className={
                selected === i
                  ? "question__item-answer show"
                  : "question__item-answer"
              }
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
