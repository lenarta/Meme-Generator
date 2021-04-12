import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './parts/Header/Header';
import Login from './pages/Login/Login';
import MainPanel from './parts/MainPanel/MainPanel';
import Map from './pages/Map/Map';
import Menu from './parts/Menu/Menu';
import Settings from './pages/Settings/Settings';
import Resources from './parts/Resources/Resources';
import Register from './pages/Register/Register';
import RootRedirect from './parts/RootRedirect/RootRedirect';
import Logs from './parts/Logs/Logs';
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
          <Route path="/main">
            <div className="page-container">
              <div className="left-page-container">
                <div className="left-top-page-container">
                  <Menu />
                  <Resources kingdomId="1" />
                </div>
                <MainPanel />
              </div>
              <div className="right-page-container">
                <Logs />
              </div>
            </div>
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route path="/register/map">
            <Map />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/settings">
            <Settings kingdomId="2" />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
