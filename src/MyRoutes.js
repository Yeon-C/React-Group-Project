import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TwitterPage from "./TwitterPage";
import LoginPage from "./LoginPage";

const MyRoutes = () => {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage handleChange={handleChange} />} />
        <Route path="/twitter" element={<TwitterPage username={username} />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
