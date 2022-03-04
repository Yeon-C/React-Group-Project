import React, { useState } from "react";
import Form from "./Form";
import TweetList from "./TweetList";
import "./css/TwitterPage.css";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";




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
      <div className="container columns">
        <div className="row ">
          <div className= "col-12 col-sm-12 col-md-1 col-l-3 col-xl-3 column column-left">
            <a href="/">
              <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
            </a>
            <SidebarLeft username={user} />
          </div>
          <div className= "col-12 col-sm-12 col-md-11 col-l-6 col-xl-6 column">
            <div className="card tweet-container">
              <Form handleSubmit={handleSubmit} />
              <TweetList tweets={tweets} username={user} removeTweet={removeTweet} />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-l-3 col-xl-3 column column-right">
            <SidebarRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitterPage;
