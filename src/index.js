import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyRoutes from "./MyRoutes";
import { NavigationBar } from './Navbar';
// import "./index.css"
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import Sidebar from './Sidebar';

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <NavigationBar />
      <Sidebar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
      
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);