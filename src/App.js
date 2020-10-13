import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import ServiceList from './Components/Dashboard/ServiceList/ServiceList';
import Order from './Components/Dashboard/Order/Order';
import Review from './Components/Dashboard/Review/Review';
import AddService from './Components/Dashboard/AddService/AddService';
import MakeAdmin from './Components/Dashboard/MakeAdmin/MakeAdmin';
function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>

          <Route exact path='/dashboard/service-list'>
            <ServiceList></ServiceList>
          </Route>
          <Route exact path='/dashboard/order'>
            <Order></Order>
          </Route>
          <Route exact path='/dashboard/review'>
            <Review></Review>
          </Route>
          <Route exact path='/dashboard/add-service'>
            <AddService></AddService>
          </Route>
          <Route exact path='/dashboard/make-admin'>
            <MakeAdmin></MakeAdmin>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
