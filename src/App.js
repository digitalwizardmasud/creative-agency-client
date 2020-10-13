import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Home from './Components/Home/Home';
function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
