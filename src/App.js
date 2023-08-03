import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={< News key='general' country="in" category="general" />}></Route>
            <Route path="/Business" element={<News key='business' country="in" category="business" />}></Route>
            <Route path="/Entertainment" element={<News key='entertainment' country="in" category="entertainment" />}></Route>
            <Route path="/General" element={<News key='general' country="in" category="general" />}></Route>
            <Route path="/Health" element={<News key='health' country="in" category="health" />}></Route>
            <Route path="/Science" element={<News key='science' country="in" category="science" />}></Route>
            <Route path="/Sports" element={<News key='sports' country="in" category="sports" />}></Route>
            <Route path="/Technology" element={<News key='technology}>' country="in" category="technology" />}></Route>
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

