import "./css/SidebarLeft.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBell, faBookmark, faEllipsis, faEnvelope, faFileLines, faHashtag, faHome, faUser,  } from '@fortawesome/free-solid-svg-icons';
import icon from './css/images/icon-image.png';



    const SidebarLeft = (props) => {
        return (
          <div>
            <div className="sidebar-icon-group">
              <FontAwesomeIcon icon={faHome} className="home-icon sidebar-icon"/>
              <span className="sidebar-icon-label">Home</span>
            </div>
            <div className="sidebar-icon-group">
              <FontAwesomeIcon icon={faHashtag} className="home-icon sidebar-icon"/>
              <span className="sidebar-icon-label">Explore</span>
            </div>
            <div className="sidebar-icon-group">
              <FontAwesomeIcon icon={faBell} className="home-icon sidebar-icon"/>
              <span className="sidebar-icon-label">Notifications</span>
            </div>
            <div className="sidebar-icon-group">
              <FontAwesomeIcon icon={faEnvelope} className="home-icon sidebar-icon"/>
              <span className="sidebar-icon-label">Messages</span>
            </div>
            <div className="sidebar-icon-group">
              <FontAwesomeIcon icon={faBookmark} className="home-icon sidebar-icon"/>
              <span className="sidebar-icon-label">Bookmarks</span>
            </div>
            <div className="sidebar-icon-group">
              <FontAwesomeIcon icon={faFileLines} className="home-icon sidebar-icon"/>
              <span className="sidebar-icon-label">Lists</span>
            </div>
            <div className="sidebar-icon-group">
              <FontAwesomeIcon icon={faUser} className="home-icon sidebar-icon"/>
              <span className="sidebar-icon-label">Profile</span>
            </div>
            <div className="sidebar-icon-group">
              <FontAwesomeIcon icon={faEllipsis} className="home-icon sidebar-icon"/>
              <span className="sidebar-icon-label">More</span>
            </div>
            <div className="sidebar-icon-group-button">
              <input type="button" value="Tweet" className="sidebar-button"></input>
            </div>
            <div class="card profile">
                  <div className="card-body">
                    <div className="row account">
                      <div className="profile-container">
                        <div className="profile-icon">
                          <img className = "image-icon-profile" src={icon} alt="Icon"></img>
                        </div>
                        <div className="profile-info">
                            <h5 class="profile-name">{props.username}</h5>
                            <h5 class="profile-account text-muted">@{props.username}</h5>
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
