import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./data";

interface Quiz {
  question: string;
  answer: string | string[];
}

function App() {
  const [index, setIndex] = useState(0);
  const [quiz, setQuiz] = useState<Quiz>(data[index]);

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
    setQuiz(data[index]);
  }, [index]);

  return (
    <main>
      <section className="quiz-container">
        <h3>{quiz.question}</h3>
        {Array.isArray(quiz.answer) ? (
          <ul>
            {quiz.answer.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{quiz.answer}</p>
        )}
      </section>
      <section className="buttons-container">
        <div className="button" onClick={prevOnClickHandler}>
          <span>&#10094;</span>
        </div>
        <div className="button" onClick={nextOnClickHandler}>
          &#10095;
        </div>
      </section>
    </main>
  );
}

export default App;
