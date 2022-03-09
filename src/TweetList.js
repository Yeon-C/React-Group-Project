import React from "react";
import './css/TweetList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRetweet, faHeart, faUpload, faTrash, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import icon from './css/images/icon-image.png';





const TweetList = (props) => {
  let tweetList = props.tweets.map((tweet, index) => {
    return (
      <div key={index} className="card tweet-list w-100">
        <div className="card-body">
          <img className = "image-icon-tweet-list" src={icon} alt="Icon"></img>
          <FontAwesomeIcon icon={faEllipsis} className="ellipses"/>
          <div className="tweet-bar">
            <h5 className="card-title tweet-bar-item">{props.username}</h5>
            <h6 className="card-subtitle mb-2 text-muted tweet-bar-item">@{props.username}</h6>
          </div>
          <p className="card-text">{tweet}</p>
          <div className="tweet-list-icons">
            <FontAwesomeIcon icon={faComment} className="tweet-list-icon comment"/>
            <FontAwesomeIcon icon={faRetweet} className="tweet-list-icon retweet"/>
            <FontAwesomeIcon icon={faHeart} className="tweet-list-icon heart"/>
            <FontAwesomeIcon icon={faUpload} className="tweet-list-icon upload"/>
            <span onClick={() => props.removeTweet(index)}><FontAwesomeIcon icon={faTrash} className="tweet-list-icon delete"/></span>
        </div>
        </div>
      </div>
    );
  });

  return <div>{tweetList}</div>;
};

export default TweetList;
