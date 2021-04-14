import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './parts/Header/Header';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Feed from './parts/Feed/Feed';
import RootRedirect from './parts/RootRedirect/RootRedirect';

import MemeCreatorGalery from './parts/MemeCreationGalery/MemeCreatorGalery';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/">
          <RootRedirect to="/main" />
        </Route>
        <Switch>
          <Route path="/main">
            <Feed />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/galery">
            <MemeCreatorGalery />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
