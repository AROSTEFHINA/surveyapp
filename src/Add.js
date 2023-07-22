
import React, { useState } from 'react';
import './Add.css';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Make sure axios is installed and imported

const Post = () => {
  const [formData, setFormData] = useState({
    id: '',
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isDataValid = (data) => {
    // Implement your data validation logic here
    // For example, check if all required fields are filled
    return true; // Return true if data is valid, otherwise return false
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id: formData.id,
      question: formData.question,
      option1: formData.option1,
      option2: formData.option2,
      option3: formData.option3,
      option4: formData.option4
    };

    if (isDataValid(data)) {
      axios.post('http://localhost:8080/aDetails', data)
        .then((response) => {
          // Handle success if needed
          console.log("Question added successfully!");
        })
        .catch((error) => {
          // Handle error if needed
          console.error("Error adding Question:", error);
        });
    } else {
      console.error("Invalid data, please fill in all fields.");
    }
  };

  return (
    <div className="qwert">
      <div className="asdfg">
        <h1 className="zxcvb">CREATE SURVEY</h1>
        <form id="form" onSubmit={handleSubmit}>
          <div className="poiu">
            <input
              type="text"
              name="id"
              className="lkjh"
              placeholder="Enter ID"
              value={formData.id}
              onChange={handleChange}
            />
          </div>
          <div className="aja">
            <input
              type="text"
              name="question"
              className="comp"
              placeholder="Enter the question here"
              value={formData.question}
              onChange={handleChange}
            />
          </div>
          <div className="shre">
            <input
              type="text"
              name="option1"
              className="sick"
              placeholder="Enter the option1"
              value={formData.option1}
              onChange={handleChange}
            />
          </div>
          <div className="stel">
            <input
              type="text"
              name="option2"
              className="bara"
              placeholder="Enter the option2"
              value={formData.option2}
              onChange={handleChange}
            />
          </div>
          <div className="ras">
            <input
              type="text"
              name="option3"
              className="biol"
              placeholder="Enter the option3"
              value={formData.option3}
              onChange={handleChange}
            />
          </div>
          <div className="zoo">
            <input
              type="text"
              name="option4"
              className="bota"
              placeholder="Enter the option4"
              value={formData.option4}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="query">
            Submit
          </button>
        </form>
        <Link to="./End">Go to End</Link>
      </div>
    </div>
  );
};

export default Post;