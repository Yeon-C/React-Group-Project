import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./css/LoginPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const LoginPage = () => {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="float-container">
      <div className="background-image float-child"></div>
      <div className="login-form float-child">
        <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
        <h1>Mock Twitter</h1>
        <h2>Sign in</h2>
        <div className="form">
          <form>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={handleChange}
            />

            <div>
              <button
                onClick={() => {
                  navigate("/twitter/" + username);
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
