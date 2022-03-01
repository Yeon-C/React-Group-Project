import React from "react";
import './css/TweetList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRetweet, faHeart, faUpload, faTrash } from '@fortawesome/free-solid-svg-icons';
import icon from './css/images/icon-image.png'
import { faCpanel } from "@fortawesome/free-brands-svg-icons";


const TweetList = (props) => {
  let tweetList = props.tweets.map((tweet, index) => {
    return (
      <div key={index} className="card tweet-list">
        <div className="card-body">
          <img className = "image-icon" src={icon} alt="Icon"></img>
          <h5 className="card-title">{props.username}</h5>
          <h6 className="card-subtitle mb-2 text-muted">@{props.username}</h6>
          <p className="card-text">{tweet}</p>
          <span className="icons">
            <FontAwesomeIcon icon={faComment} className="icon comment"/>
            <FontAwesomeIcon icon={faRetweet} className="icon retweet"/>
            <FontAwesomeIcon icon={faHeart} className="icon heart"/>
            <FontAwesomeIcon icon={faUpload} className="icon upload"/>
            <span onClick={() => props.removeTweet(index)}><FontAwesomeIcon icon={faTrash} className="icon delete"/></span>
        </span>
        </div>
      </div>
    );
  });

  return <div>{tweetList}</div>;
};

export default TweetList;
