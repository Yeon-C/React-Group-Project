import React, { useState } from "react";
import "./css/Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faChartBar,
  faFaceSmile,
  faCamera,
  faCalendarDays,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import icon from "./css/images/icon-image.png";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db, auth } from "./firebaseConfig";

const Form = () => {
  const [tweet, setTweet] = useState("");

  const handleChange = (e) => {
    setTweet(e.target.value);
  };

 // submit form to database and then pass tweet state to handleSubmit function
  const postsCollectionRef = collection(db, "posts");
  const submitForm = async () => {
    if (tweet.length > 0) {
      await addDoc(postsCollectionRef, {
        tweet,
        author: {
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid,
        },
        // date: Timestamp.fromDate(new Date),
        createdAt:Timestamp.now()
      })
      // .then(props.handleSubmit(tweet))
      .then(setTweet(""))      
    } else {
      alert("Please enter something to tweet.");
    }
  };

  return (
    <div className="card tweet-box w-100">
      <div className="card-header">
        <h3>Home</h3>
      </div>
      <div className="card-body">
        <img className="image-icon-form" src={icon} alt="Icon"></img>
        <div className="form-line">
          <textarea
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
          <FontAwesomeIcon icon={faImage} className="icon image" />
          <FontAwesomeIcon icon={faCamera} className="icon camera" />
          <FontAwesomeIcon icon={faChartBar} className="icon chart" />
          <FontAwesomeIcon icon={faFaceSmile} className="icon smile" />
          <FontAwesomeIcon icon={faCalendarDays} className="icon calendar" />
          <FontAwesomeIcon icon={faLocationDot} className="icon location" />
        </span>
        <input
          className="tweet-box-button"
          type="button"
          value="Tweet"
          onClick={submitForm}
        />
      </div>
    </div>
  );
};

export default Form;
