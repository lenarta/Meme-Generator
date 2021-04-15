import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './parts/Header/Header';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Feed from './parts/Feed/Feed';
import RootRedirect from './parts/RootRedirect/RootRedirect';

import MemeCreatorGalery from './parts/MemeCreationGalery/MemeCreatorGalery';
import MemeCreator from './parts/MemeCreator/MemeCreator';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <RootRedirect to="/main" />
          </Route>
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
          <Route path="/memecreator">
            <MemeCreator />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
