import React from "react";
import { Link } from "react-router-dom";
import './css/LoginPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const LoginPage = (props) => {
  return (
    <div className="float-container">
      <div className="background-image float-child"></div>
      <div className="login-form float-child">
        <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
        <h1>Mock Twitter</h1>
        <h2>Sign in</h2>
        <div className="form">
          <form>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={props.username}
              onChange={props.handleChange}
            />
            <Link to="/twitter">
              <div><button>Submit</button></div>
            </Link>
          </form>
        </div>
      </div>
    </div>
    
  );
};

export default LoginPage;
