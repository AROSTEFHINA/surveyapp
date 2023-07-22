import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import FeedbackForm from './FeedbackForm';
import Aboutapp from './Aboutapp';
import LikertScale from './LikertScale';
import OpenEndedQuestions from './OpenEndedQuestions';
import RatingScale from './RatingScale';
import ButtonMain from './ButtonMain';

const Home = () => {
  return (
    <div>
      <nav>
        <div className="menu">
          <div className="logo">
            <a href="#">SmartSurvey</a>
          </div>
          <ul>
            <li><a href="#">Home</a></li>
            <div class="jesus">
  <button class="dropbtn">Templates</button>
  <div class="dropdown-content">
  <Link to="/ButtonMain">Multiple choice</Link>
  <Link to="/RatingScale">Rating scales</Link>
   <Link to="/OpenEndedQuestions">Open-ended</Link>
   <Link to="/LikertScale">Likert scales</Link>
  </div>
</div>
            <li><Link to="/Aboutapp">About</Link></li>
            <li><a href="mailto:arostefhina26@gmail.com">Contact Us</a></li>
            <li><Link to="/FeedbackForm">Feedback</Link></li>
          </ul>
        </div>
      </nav>
      <div className="img"></div>
      <div className="center">
        <div className="title">MAKE SMARTER DECISIONS</div>
        <div className="sub_title">Create online surveys, forms, and questionnaires</div>
      </div>
      <div className="center1">
        <div className="sub_title1">to collect and analyze data.</div>
        <div className="btns">
          <div className="aish">
            <button>Get Started</button>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="footer">
        <div className="wrapper">
          <ul className="footer-links">
            <li><a href="https://www.facebook.com/elango.thangam.315?mibextid=ZbWKwL"><i className="fab fa-facebook">Facebook</i></a></li>
            <li><a href="#"><i className="fab fa-twitter">Privacy policy</i></a></li>
            <li><a href="#"><i className="fab fa-instagram">Terms of use</i></a></li>
            <li><a href="#"><i className="fab fa-faqs">FAQs</i></a></li>
             
          </ul>
        </div>
        <div className="footer-info">
  <div className='rowCol'>
    <center><p>&copy; 2023 SmartSurvey. All rights reserved.</p></center>
  </div></div>
      </footer>
    </div>
  );
};

export default Home;
