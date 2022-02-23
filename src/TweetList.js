import React from "react";

const TweetList = (props) => {
  let tweetList = props.tweets.map((tweet, index) => {
    return (
      <div key={index} className="card">
        <div className="card-body">
          <h5 className="card-title">{props.username}</h5>
          <h6 className="card-subtitle mb-2 text-muted">@{props.username}</h6>
          <p className="card-text">{tweet}</p>
          <button onClick={() => props.removeTweet(index)}>Delete</button>
        </div>
      </div>
    );
  });

  return <div>{tweetList}</div>;
};

export default TweetList;
