import React, { useState } from "react";
import Form from "./Form";
import TweetList from "./TweetList";
import './css/TwitterPage.css'

const TwitterPage = (props) => {
  const [tweets, setTweets] = useState([]);
  const username = props.username;

  const handleSubmit = (tweet) => {
    setTweets([tweet, ...tweets]);
  };

  const removeTweet = (index) => {
    setTweets(
      tweets.filter((tweet, idx) => {
        return idx !== index;
      })
    );
  };

  return (
    <div>
      <h1>TwitterPage of {username}</h1>
      <hr />
      <h2>Add new tweet </h2>
      <Form handleSubmit={handleSubmit} />
      <hr />
      <TweetList
        tweets={tweets}
        username={username}
        removeTweet={removeTweet}
      />
    </div>
  );
};

export default TwitterPage;
