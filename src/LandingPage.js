import React from 'react';
import { Link } from 'react-router-dom';
 

const LandingPage = () => {
  return (
    <div className="containersss">
      <h1>Welcome to Our Website</h1>
      <p>Please select the appropriate login option:</p>
      <div className="ducker"> <Link to="/SignIn">TAKE SURVEY</Link></div>
      <br />
      <div className="ker"> <Link to="/Home">CREATE SURVEY</Link></div>

    </div>
  );
};

export default LandingPage;