import React, { useState } from "react";
import Form from "./Form";
import TweetList from "./TweetList";
import "./css/TwitterPage.css";
import { useParams } from "react-router-dom";
import { NavigationBar } from "./NavBarComponents/Navbar";
import Sidebar from "./NavBarComponents/Sidebar";

const TwitterPage = () => {
  let { user } = useParams();

  const [tweets, setTweets] = useState([]);

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
      <NavigationBar />
      <Sidebar />
      <h1 className="header">{user}'s Twitter</h1>
      <div className="card tweet-container">
        <Form handleSubmit={handleSubmit} />
        <TweetList tweets={tweets} username={user} removeTweet={removeTweet} />
      </div>
    </div>
  );
};

export default TwitterPage;
