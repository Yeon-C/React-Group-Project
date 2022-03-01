import Posts from './Posts';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, useRoutes } from "react-router-dom";
import { Navbar } from './Navbar';
import React from 'react';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import { Sidebar } from './Sidebar';

const App = () => {
    return (
        <React.Fragment>
            <Router>
                <Navbar />

                <Sidebar />
            <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='*' element={<NoMatch/>} />
                </Routes>
            </Router>
        </React.Fragment>
    );
}
