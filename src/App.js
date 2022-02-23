import "./style.css";
import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { profile } from "./profile";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import ModelLoader from "./components/ModelLoader";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import Works from "./components/Works";

export default function App() {
  const { fullname } = profile

  const initial = { 
    opacity: 0,
    scale: 0.9
  }
  const animate = { 
    opacity: 1,
    scale: 1
  }

  return (
    <Router>
      <div className="App">
        <Navbar />
        <ModelLoader initial={ initial } animate={ animate } />
        <div className="section-start">
          <Routes>
            <Route path="/" element={ <Home profile={ profile } initial={ initial } animate={ animate } /> }/>
            <Route path='/works' element={ <Works profile={ profile } initial={ initial } animate={ animate } />} />
            <Route path='*' element={ <ErrorPage initial={ initial } animate={ animate } /> } />
          </Routes>
        </div>
        <Footer fullname={ fullname } />
      </div>
    </Router>
  );
}
