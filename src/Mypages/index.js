import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './home';
import MyBooks from './mybooks';

const Mypages = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element = {<Home/>} />
                <Route path = "/mybooks" element = {<MyBooks/>} />
            </Routes>
        </Router>
    );
};
export default Mypages;