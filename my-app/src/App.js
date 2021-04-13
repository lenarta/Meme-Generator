import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './parts/Header/Header';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Feed from './parts/Feed/Feed';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
