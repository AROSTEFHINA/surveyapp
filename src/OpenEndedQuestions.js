import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './OpenEndedQuestions.css'; // Import the CSS file for animations

function OpenEndedQuestions() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');

  const handleQuestionChange = (event) => {
    setCurrentQuestion(event.target.value);
  };

  const handleAddQuestion = () => {
    if (currentQuestion !== '') {
      const newQuestion = {
        question: currentQuestion,
        comments: '',
      };
      setQuestions([...questions, newQuestion]);
      setCurrentQuestion('');
    }
  };

  const handleCommentChange = (event, questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].comments = event.target.value;
    setQuestions(updatedQuestions);
  };

  const handleRemoveQuestion = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(questionIndex, 1);
    setQuestions(updatedQuestions);
  };

  return (
    <div className="kageyama">
    <div className="container">
      <h1>Open-Ended Questions</h1>

      <div className="content">
        <h2>Create a Question</h2>
        <input
          type="text"
          value={currentQuestion}
          onChange={handleQuestionChange}
          placeholder="Enter your question"
        />
        <br />
        <button onClick={handleAddQuestion}>Add Question</button>
      </div>

      <div className="content">
        <h2>Questions List</h2>
        <TransitionGroup>
          {questions.map((question, index) => (
            <CSSTransition key={index} timeout={300} classNames="question">
              <div className="question">
                <p>{question.question}</p>
                <textarea
                  value={question.comments}
                  onChange={(event) => handleCommentChange(event, index)}
                  placeholder="Enter your comment"
                ></textarea>
                <button onClick={() => handleRemoveQuestion(index)}>Remove</button>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
    </div>
  );
}

export default OpenEndedQuestions;