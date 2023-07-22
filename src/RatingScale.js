import React, { useState } from 'react';
import './RatingScale.css';

function RatingScale() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(5);

  const handleQuestionChange = (event) => {
    setCurrentQuestion(event.target.value);
  };

  const handleMinValueChange = (event) => {
    setMinValue(Number(event.target.value));
  };

  const handleMaxValueChange = (event) => {
    setMaxValue(Number(event.target.value));
  };

  const handleAddQuestion = () => {
    if (currentQuestion !== '') {
      const newQuestion = {
        question: currentQuestion,
        minValue: minValue,
        maxValue: maxValue,
        ratings: []
      };
      setQuestions([...questions, newQuestion]);
      setCurrentQuestion('');
      setMinValue(1);
      setMaxValue(5);
    }
  };

  const handleRateQuestion = (questionIndex, rating) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].ratings.push(rating);
    setQuestions(updatedQuestions);
  };

  const renderStarRating = (questionIndex, value) => {
    const stars = [];
    for (let i = 1; i <= maxValue; i++) {
      stars.push(
        <span
          key={i}
          className={i <= value ? 'star filled' : 'star'}
          onClick={() => handleRateQuestion(questionIndex, i)}
        >
          &#9734;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="harshini">
    <div className="containeerrr">
      <h1>Rating Scale</h1>

      <div className="content">
        <h2>Create a Question</h2>
        <input
          type="text"
          value={currentQuestion}
          onChange={handleQuestionChange}
          placeholder="Enter your question"
        />
        <br />
        <label>
          Min Value:
          <input
            type="number"
            value={minValue}
            min={1}
            onChange={handleMinValueChange}
          />
        </label>
        <br />
        <label>
          Max Value:
          <input
            type="number"
            value={maxValue}
            min={1}
            onChange={handleMaxValueChange}
          />
        </label>
        <br />
        <button onClick={handleAddQuestion}>Add Question</button>
      </div>

      <div className="content">
        <h2>Questions List</h2>
        {questions.map((question, index) => (
          <div key={index} className="question">
            <p>{question.question}</p>
            <div className="ratings">
              {renderStarRating(index, question.ratings.length)}
            </div>
          </div>
        ))}
      </div>
    </div>
     </div>
  );
}

export default RatingScale;