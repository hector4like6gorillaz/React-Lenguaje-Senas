import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { LenSenas } from './Componets/LenSenas/LenSenas';
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/React-Lenguaje-senas/"><LenSenas /> </Route>
      <Redirect to="/React-Lenguaje-senas/"><LenSenas /></Redirect>
    </Switch>
  </Router>,
  document.getElementById('root')
);


