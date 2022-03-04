import "./css/SidebarLeft.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBookmark, faEllipsis, faEnvelope, faFileLines, faHashtag, faHome, faUser,  } from '@fortawesome/free-solid-svg-icons';
import icon from './css/images/icon-image.png';
import { useNavigate } from "react-router-dom";


const SidebarLeft = (props) => {
  let navigate = useNavigate();

  return (
    <div>
      <a onClick={() => {navigate("/twitter/" + props.username)}}>
        <div className="sidebar-icon-group">
          <FontAwesomeIcon icon={faHome} className="home-icon sidebar-icon"/>
          <span className="sidebar-icon-label">Home</span>
        </div>
      </a>
      <a href="/Hashtag">
        <div className="sidebar-icon-group">
          <FontAwesomeIcon icon={faHashtag} className="home-icon sidebar-icon"/>
          <span className="sidebar-icon-label">Explore</span>
        </div>
      </a>
      <a href="/Bell">
        <div className="sidebar-icon-group">
          <FontAwesomeIcon icon={faBell} className="home-icon sidebar-icon"/>
          <span className="sidebar-icon-label">Notifications</span>
        </div>
      </a>
      <a href="/Envelope">
        <div className="sidebar-icon-group">
          <FontAwesomeIcon icon={faEnvelope} className="home-icon sidebar-icon"/>
          <span className="sidebar-icon-label">Messages</span>
        </div>
      </a>
      <a href="/Bookmark">
        <div className="sidebar-icon-group">
          <FontAwesomeIcon icon={faBookmark} className="home-icon sidebar-icon"/>
          <span className="sidebar-icon-label">Bookmarks</span>
        </div>
      </a>
      <a href="/Lines">
        <div className="sidebar-icon-group">
          <FontAwesomeIcon icon={faFileLines} className="home-icon sidebar-icon"/>
          <span className="sidebar-icon-label">Lists</span>
        </div>
      </a>
      <a href="/User">
        <div className="sidebar-icon-group">
          <FontAwesomeIcon icon={faUser} className="home-icon sidebar-icon"/>
          <span className="sidebar-icon-label">Profile</span>
        </div>
      </a>
      <a href="/Ellipses">
        <div className="sidebar-icon-group">
          <FontAwesomeIcon icon={faEllipsis} className="home-icon sidebar-icon"/>
          <span className="sidebar-icon-label">More</span>
        </div>
      </a>
      <div className="sidebar-icon-group-button">
        <input type="button" value="Tweet" className="sidebar-button"></input>
      </div>
      <div className="card profile">
        <div className="card-body">
          <div className="row account">
            <div className="profile-container">
              <div className="profile-icon">
                <img className = "image-icon-profile" src={icon} alt="Icon"></img>
              </div>
              <div className="profile-info">
                <h5 className="profile-name">{props.username}</h5>
                <h5 className="profile-account text-muted">@{props.username}</h5>
              </div>
              <FontAwesomeIcon icon={faEllipsis} className="profile-ellipses"/>
            </div>            
          </div>    
        </div>
      </div>                   
    </div>
  );
};

export default SidebarLeft;
