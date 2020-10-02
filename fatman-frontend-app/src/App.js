import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import LoginPage from './components/login/LoginPage'
import MainPage from './components/main/MainPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact label="Login" component={MainPage}/>
        <Route path="/todo" exact label="Login" component={LoginPage}/>
      </Switch>
  </Router>
  );  
}

export default App;