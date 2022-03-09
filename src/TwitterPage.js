import React, { useEffect, useState } from "react";
import Form from "./Form";
import TweetList from "./TweetList";
import "./css/TwitterPage.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";
// authentication
import { signOut } from "firebase/auth";
import { auth, db } from "./firebaseConfig";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";

const TwitterPage = () => {
  let navigate = useNavigate();
  // Sign out button
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      // setIsAuth(false);
      navigate("/");
    });
  };

  let { user } = useParams();

  const [tweets, setTweets] = useState([]);
  const postsCollectionRef = collection(db, "posts");


  const removeTweet = async (id) => {
    const tweetDoc = doc(db, "posts", id);
    await deleteDoc(tweetDoc);
  };

  useEffect(() => {
    const getTweets = async () => {
      const data = await getDocs(postsCollectionRef);
      setTweets(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getTweets();
  },[removeTweet]);

  // const handleSubmit = async(tweet) => {
  //   setTweets([tweet, ...tweets]);
  // };


  //  const removeTweet = (index) => {
  //    setTweets(
  //      tweets.filter((tweet, idx) => {
  //        return idx !== index;
  //      })
  //    );
  //  };

  return (
    <div>
      <div className="container columns">
        <div className="row ">
          <div className="col-12 col-sm-12 col-md-1 col-l-3 col-xl-3 column column-left">
            <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
            <SidebarLeft username={user} />
          </div>
          <div className="col-12 col-sm-12 col-md-11 col-l-6 col-xl-6 column">
            <div className="card tweet-container">
              <Form />
              <TweetList
                tweets={tweets}
                username={user}
                removeTweet={removeTweet}
              />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-l-3 col-xl-3 column column-right">
            <div className="card-body" onClick={signUserOut}>
              <div className=" card-header sidebar-icon-label sidebar-icon-group">
                Sign Out
              </div>
            </div>
            <SidebarRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitterPage;
