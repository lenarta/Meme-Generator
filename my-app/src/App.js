import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './parts/Header/Header';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Feed from './parts/Feed/Feed';
import RootRedirect from './parts/RootRedirect/RootRedirect';

import MemeMaker from './pages/MemeMaker/MemeMaker';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/">
          <RootRedirect />
        </Route>
        <Switch>
          <Route exact path="/main">
            <Feed />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/maker">
            <MemeMaker />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
