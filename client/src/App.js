import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Saved, Search, Test} from './pages'
class App extends Component {
  render() {
    return (
        <div id= 'hello'>
          <Router>
            <div id = 'routeContainer'>
              <Route exact path = "/" component ={Search}/>
              <Route path = "/saved" component ={Saved}/>
              <Route path = "/test" component ={Test}/>
            </div>
          </Router>
        </div>

    );
  }
}

export default App;
