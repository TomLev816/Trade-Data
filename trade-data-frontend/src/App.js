import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import { LandingPage } from './containers/LandingPage'
import  NavBar  from './containers/NavBar'
import { GetData } from './containers/GetData'
import { GetNewStock } from './containers/GetNewStock'


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route path="/" component={NavBar} />
          <Route path="/home" component={LandingPage} />
          <Route exact path="/" component={LandingPage} />
          <Route path="/get-data" component={GetData} />
          <Route path="/get-data-new-stock" component={GetNewStock} />
          
        </div>
      </Router>
    </div>
  );
}

export default App;
