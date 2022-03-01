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
      <h1 className="header">{username}'s Twitter</h1>
      <div className="card tweet-container">
        <Form handleSubmit={handleSubmit} />
        <TweetList
          tweets={tweets}
          username={username}
          removeTweet={removeTweet}
        />
      </div>
    </div>

    // <div>
    //   <div className="card text-center">
    //     <div className="card-header">
    //       <h1>{username}'s Twitter</h1>
    //     </div>
    //     <hr/>
    //     <div className="card-body">
    //       <Form handleSubmit={handleSubmit}/>
    //       <hr/>
    //     </div>
    //      <TweetList
    //       tweets={tweets}
    //       username={username}
    //       removeTweet={removeTweet}
    //     />          
    //   </div>
    // </div>


  );
};

export default TwitterPage;
