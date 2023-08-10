import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import React from 'react';
// import LoadingBar from 'react-top-loading-bar';

import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";

const App =()=>{
  const pagesize = 9;
  // apikey=process.env.REACT_APP_NEWS_API
  // state={
  //   progress:0
  // }
  // setProgress = (progress) =>{
  //   setState({Progress:progress})
  //   }
  // setProgress=(progress)=> {
  // setState({progress:progress})
  // }

    return (

      <div>

        <Router>
          <Navbar />
          {/* <LoadingBar
        color='#f11946'
        progress={state.progress}
      
         /> */}
          <Routes>
            <Route path="/" element={<News key='general' country="in" pagesize={pagesize} category="general" />}></Route>
            <Route path="/Business" element={<News key='business' country="in" pagesize={pagesize} category="business" />}></Route>
            <Route path="/Entertainment" element={<News key='entertainment' pagesize={pagesize} country="in" category="entertainment" />}></Route>
            <Route path="/General" element={<News key='general' country="in" pagesize={pagesize} category="general" />}></Route>
            <Route path="/Health" element={<News key='health' country="in" pagesize={pagesize} category="health" />}></Route>
            <Route path="/Science" element={<News key='science' country="in" pagesize={pagesize} category="science" />}></Route>
            <Route path="/Sports" element={<News key='sports' country="in" pagesize={pagesize} category="sports" />}></Route>
            <Route path="/Technology" element={<News key='technology}>' country="in" pagesize={pagesize} category="technology" />}></Route>
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>

      </div>
    )
  }
export default App

