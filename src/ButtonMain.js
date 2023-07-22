import React from "react";
import Add from './Add';
import Get from './Get';
import Delete from './Delete';
import Update from './Update';
import { Link } from 'react-router-dom';
import "./ButtonMain.css";

const ButtonComponent = () => {
  return (
    <div className="duck"> 
    <div className="buttonMainer-container">
      <Link to='/Add'>
      <button className="buttondd">Add Question</button></Link>
      <Link to='/Get'>
      <button className="buttondd1">Edit Question</button></Link>
      <Link to='/Update'>
      <button className="buttondd2">Update Question</button></Link>
      <Link to='/Delete'>
      <button className="buttondd3">Delete Question</button></Link>
    </div>
    </div>
  );
};

export default ButtonComponent;