
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";




export default class App extends Component {

  render() {
return(
    <div>
      <Router>

<Navbar/>

<Switch>
          <Route path="/"> <News country="in" category = "general"/>  </Route>
          <Route path="/business"> <News country="in" category = "business"/>  </Route>
          <Route path="/entertainment"> <News country="in" category = "entertainment"/>  </Route>
          <Route path="/health"> <News country="in" category = "health"/>  </Route>
          <Route path="/science"> <News country="in" category = "science"/>  </Route>
          <Route path="/technology"> <News country="in" category = "technology"/>  </Route>
          <Route path="/sports"> <News country="in" category = "sports"/>  </Route>
        
        </Switch>
</Router>
    </div>
)
}
}
