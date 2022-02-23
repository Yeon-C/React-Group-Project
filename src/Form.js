import React, { useState } from "react";

const Form = (props) => {
  const [tweet, setTweet] = useState("");

  const handleChange = (e) => {
    setTweet(e.target.value);
  };

  const submitForm = () => {
    props.handleSubmit(tweet);
    setTweet("");
  };

  return (
    <form>
      <label htmlFor="tweet">New Tweet: </label>
      <input
        type="text"
        name="tweet"
        id="tweet"
        value={tweet}
        onChange={handleChange}
      />
      <input type="button" value="Submit" onClick={submitForm} />
    </form>
  );
};

export default Form;
