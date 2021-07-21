import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);

  const prevOnClickHandler = () => {
    if (index === 0) {
      setIndex(data.length - 1);
    } else {
      setIndex((state) => --state % data.length);
    }
  };

  const nextOnClickHandler = () => {
    if (index === data.length - 1) {
      setIndex(0);
    } else {
      setIndex((state) => ++state % data.length);
    }
  };

  useEffect(() => {
    setQuestion(data[index]);
  }, [index]);

  return (
    <>
      <section className="questionCard">
        <h2>{question.question}</h2>
        {Array.isArray(question.answer) ? (
          <ul>
            {question.answer.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{question.answer}</p>
        )}
      </section>
      <section>
        <button onClick={prevOnClickHandler}>Previous</button>
        <button onClick={nextOnClickHandler}>Next</button>
      </section>
    </>
  );
}

export default App;
