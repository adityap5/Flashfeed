
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

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
            <Route path="/"> element={<News country="in" category="general" />}  </Route>
            <Route path="/business">element={<News country="in" category="business" />}   </Route>
            <Route path="/entertainment"> element={<News country="in" category="entertainment" />} </Route>
            <Route path="/health">element={<News country="in" category="health" />}  </Route>
            <Route path="/science"> element={<News country="in" category="science" />}  </Route>
            <Route path="/technology">element={<News country="in" category="technology" />}   </Route>
            <Route path="/sports"> element={<News country="in" category="sports" />} </Route>

          </Routes>
        </Router>
      </div>
    )
  }
}
