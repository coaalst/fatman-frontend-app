import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import LoginPage from './components/login/LoginPage'
import MainPage from './components/main/MainPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact label="Login" component={LoginPage}/>
        <Route path="/home" exact label="Login" component={MainPage}/>
      </Switch>
  </Router>
  );  
}

export default App;