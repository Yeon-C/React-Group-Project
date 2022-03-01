import React, { useState } from "react";
import Form from "./Form";
import TweetList from "./TweetList";

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

  const editTweet = (index, tweet) => {
    setTweets( // setTweets(tweets.map((tweet, idx) => {
        tweets.map((tweet, idx) => {
            if (idx === index) {
                return tweet.Form;
            } else {
                return tweet;
            }
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