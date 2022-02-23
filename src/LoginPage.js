import React from "react";
import { Link } from "react-router-dom";

const LoginPage = (props) => {
  return (
    <div>
      <h1>Welcome to my Mock Twitter made in React</h1>
      <h2>Login to your account to begin</h2>
      <form>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={props.username}
          onChange={props.handleChange}
        />
        <Link to="/twitter">
          <button>Submit</button>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
