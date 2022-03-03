import React, { useState } from "react";
import Form from "./Form";
import TweetList from "./TweetList";
import "./css/TwitterPage.css";
import { useParams } from "react-router-dom";
import { NavigationBar } from "./NavBarComponents/Navbar";
import Sidebar from "./NavBarComponents/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBell, faBookmark, faEllipsis, faEnvelope, faFileLines, faHashtag, faHome, faUser,  } from '@fortawesome/free-solid-svg-icons';
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
      {/* <NavigationBar /> */}
      {/* <Sidebar /> */}
      {/* <h1 className="header">{user}'s Twitter</h1> */}
      <div className="container columns">
        <div className="row row-cols-sm-2 rows-cols-md-2">
          <div className="col-sm-3 column column-left">
            <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
            <SidebarLeft username={user} />
          </div>
          <div className="col-sm-6 column">
            <div className="card tweet-container">
              <Form handleSubmit={handleSubmit} />
              <TweetList tweets={tweets} username={user} removeTweet={removeTweet} />
            </div>
          </div>
          <div className="col-sm-3 column column-right">
            <SidebarRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitterPage;
