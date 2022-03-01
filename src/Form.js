import React, { useState } from "react";
import './css/Form.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faChartBar, faFaceSmile, faCamera } from '@fortawesome/free-solid-svg-icons';
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
    // <form className="card tweet-box">
    //   <label className= "card-header" htmlFor="tweet">New Tweet: </label>
    //   <input
    //     className="tweet-box-input"
    //     placeholder="What's happening?"
    //     type="text"
    //     name="tweet"
    //     id="tweet"
    //     value={tweet}
    //     onChange={handleChange}
    //   />
    //   <span className="icons">
    //     <FontAwesomeIcon icon={faCamera} className="icon camera"/>
    //     <FontAwesomeIcon icon={faImage} className="icon image"/>
    //     <FontAwesomeIcon icon={faChartBar} className="icon chart"/>
    //     <FontAwesomeIcon icon={faFaceSmile} className="icon smile"/>
    //   </span>
    //   <input className= "tweet-box-button" type="button" value="Tweet" onClick={submitForm} />
    // </form>

    <div className="card tweet-box">
      <div className="card-header ">
        <h3>Home</h3>
      </div>
      <hr/>
      <div className="card-body">
          <img className = "image-icon" src={icon} alt="Icon"></img>
        <input
          className="tweet-box-input"
          placeholder="What's happening?"
          type="text"
          name="tweet"
          id="tweet"
          value={tweet}
          onChange={handleChange}
        />
        <span className="icons">
          <FontAwesomeIcon icon={faCamera} className="icon camera"/>
          <FontAwesomeIcon icon={faImage} className="icon image"/>
          <FontAwesomeIcon icon={faChartBar} className="icon chart"/>
          <FontAwesomeIcon icon={faFaceSmile} className="icon smile"/>
        </span>
        <input className= "tweet-box-button" type="button" value="Tweet" onClick={submitForm} />
      </div>
    </div>
  );
};

export default Form;
