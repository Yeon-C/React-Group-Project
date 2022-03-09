import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TwitterPage from "./TwitterPage";
import LoginPage from "./LoginPage";
import ErrorPage from "./ErrorPage";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/twitter/:user" element={<TwitterPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
