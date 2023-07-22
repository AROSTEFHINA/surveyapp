import React, { useState } from 'react';
import './AdminInterface.css';

function AdminInterface() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [currentOption, setCurrentOption] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleQuestionChange = (event) => {
    setCurrentQuestion(event.target.value);
  };

  const handleOptionChange = (event) => {
    setCurrentOption(event.target.value);
  };

  const handleAddOption = () => {
    if (currentOption !== '') {
      setOptions([...options, currentOption]);
      setCurrentOption('');
    }
  };

  const handleAddQuestion = () => {
    if (currentQuestion !== '' && options.length >= 2) {
      const newQuestion = {
        question: currentQuestion,
        options: options,
        selectedOption: ''
      };
      setQuestions([...questions, newQuestion]);
      setCurrentQuestion('');
      setOptions([]);
      setCurrentOption('');
      showSuccessPopup();
    }
  };

  const handleOptionSelect = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].selectedOption = options[optionIndex];
    setQuestions(updatedQuestions);
  };

  const showSuccessPopup = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  return (
    <div className="euphoria">
    <div className="container-admin-interface">
      <h1 className="heading-admin-interface">Admin Interface</h1>

      <div className="content-admin-interface">
        <h2 className="sub-heading-admin-interface">Create a Question</h2>
        <input
          type="text"
          value={currentQuestion}
          onChange={handleQuestionChange}
          placeholder="Enter your question"
          className="create-question__input"
        />
        <br />
        <input
          type="text"
          value={currentOption}
          onChange={handleOptionChange}
          placeholder="Enter an option"
          className="option-input"
        />
        <button onClick={handleAddOption} className="add-option-button">
          Add Option
        </button>
        <br />
        <ul className="options-list">
          {options.map((option, index) => (
            <li key={index} className="option-item">
              <input
                type="radio"
                name={`option-${index}`}
                value={option}
                onChange={() => handleOptionSelect(questions.length, index)}
              />
              {option}
            </li>
          ))}
        </ul>
        <button onClick={handleAddQuestion} className="add-question-button">
          Add Question
        </button>
      </div>

      {questions.map((question, index) => (
        <div className="content-admin-interface" key={index}>
          <h2 className="sub-heading-admin-interface">Question {index + 1}</h2>
          <ul className="options-list">
            {question.options.map((option, optionIndex) => (
              <li key={optionIndex} className="option-item">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={option}
                  checked={option === question.selectedOption}
                  onChange={() => handleOptionSelect(index, optionIndex)}
                />
                {option}
              </li>
            ))}
          </ul>
          <p className="question-text">{question.question}</p>
        </div>
      ))}

      {showSuccessMessage && (
        <div className="success-message show">
          Your question was successfully added!
        </div>
      )}
    </div>
    </div>
  );
}

export default AdminInterface;