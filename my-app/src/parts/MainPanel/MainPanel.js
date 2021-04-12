import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Buildings from '../Buildings/Buildings';
import BuildingDetails from '../BuildingDetails/BuildingDetails';
import Troops from '../Troops/Troops';
import Battle from '../Battle/Battle';
import Leaderboard from '../Leaderboard/Leaderboard';
import './MainPanel.css';

function MainPanel() {
  return (
    <div className="main-panel">
      <Switch>
        <Route exact path="/main">
          <Buildings />
        </Route>
        <Route exact path="/main/building">
          <Buildings />
        </Route>
        <Route path="/main/building/details">
          <BuildingDetails />
        </Route>
        <Route path="/main/troops">
          <Troops />
        </Route>
        <Route path="/main/battle">
          <Battle />
        </Route>
        <Route path="/main/leaderboard">
          <Leaderboard />
        </Route>
      </Switch>
    </div>
  );
}

export default MainPanel;
