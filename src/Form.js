import React, { useState } from "react";
import './css/Form.css'
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faChartBar, faFaceSmile, faCamera, faCalendarDays,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import icon from './css/images/icon-image.png'



const Form = (props) => {
  const [tweet, setTweet] = useState("");

  const handleChange = (e) => {
    setTweet(e.target.value);
  };

  const submitForm = () => {
    props.handleSubmit(tweet);
    setTweet("");
  };

  return (
    <Container>
      <div className="card tweet-box w-100">
        <div className="card-header">
          <h3>Home</h3>
        </div>
        <div className="card-body">
          <img className = "image-icon-form" src={icon} alt="Icon"></img>
          <div className="form-line">
            <input
              className="tweet-box-input"
              placeholder="What's happening?"
              type="text"
              name="tweet"
              id="tweet"
              value={tweet}
              onChange={handleChange}
            />
          </div>
          <span className="icons">
            <FontAwesomeIcon icon={faImage} className="icon image"/>
            <FontAwesomeIcon icon={faCamera} className="icon camera"/>
            <FontAwesomeIcon icon={faChartBar} className="icon chart"/>
            <FontAwesomeIcon icon={faFaceSmile} className="icon smile"/>
            <FontAwesomeIcon icon={faCalendarDays} className="icon calendar"/>
            <FontAwesomeIcon icon={faLocationDot} className="icon location"/>
          </span>
          <input className= "tweet-box-button" type="button" value="Tweet" onClick={submitForm} />
        </div>
      </div>
    </Container>
  );
};

export default Form;
