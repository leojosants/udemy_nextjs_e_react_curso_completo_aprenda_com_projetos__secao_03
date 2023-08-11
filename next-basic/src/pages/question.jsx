import { useState, useEffect } from "react";

export default function question() {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/question/123')
      .then(resp => resp.json())
      .then(setQuestion);
  }, []);

  function renderAnswers() {
    if (question) {
      return question.answers.map((quest, i) => {
        return <li key={i}>{quest}</li>;
      });
    }
    
    return false;
  }

  return (
    <div>
      <h1>Question</h1>
      <div>
        <span>{question?.id} - {question?.statement}</span>
        <ul>{renderAnswers()}</ul>
      </div>
    </div>
  );
};