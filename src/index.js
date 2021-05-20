import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { LenSenas } from './Componets/LenSenas/LenSenas';
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/len"><LenSenas /> </Route>
      <Redirect to="/len"><LenSenas /></Redirect>
    </Switch>
  </Router>,
  document.getElementById('root')
);


