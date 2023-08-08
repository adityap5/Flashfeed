import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import React, { Component } from 'react';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  
pagesize= 9;
state={
  progress:0
};
setProgress(progress) {
this.setProgress({progress:progress});
};
  render() {
  return (
      
      <div>
         <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      
         />
        <Router>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} key='general' country="in" pagesize={this.pagesize} category="general" />}></Route>
            <Route path="/Business" element={<News setProgress={setProgress} key='business' country="in" pagesize={this.pagesize} category="business" />}></Route>
            <Route path="/Entertainment" element={<News setProgress={setProgress} key='entertainment' pagesize={this.pagesize} country="in" category="entertainment" />}></Route>
            <Route path="/General" element={<News setProgress={setProgress} key='general' country="in" pagesize={this.pagesize} category="general" />}></Route>
            <Route path="/Health" element={<News setProgress={setProgress} key='health' country="in" pagesize={this.pagesize} category="health" />}></Route>
            <Route path="/Science" element={<News setProgress={setProgress} key='science' country="in" pagesize={this.pagesize} category="science" />}></Route>
            <Route path="/Sports" element={<News setProgress={setProgress} key='sports' country="in" pagesize={this.pagesize} category="sports" />}></Route>
            <Route path="/Technology" element={<News setProgress={setProgress} key='technology}>' country="in" pagesize={this.pagesize} category="technology" />}></Route>
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
       
      </div>
    )
  }
}

