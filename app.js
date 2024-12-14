// frontend/src/App.js
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MatchSetupPage from './pages/MatchSetupPage';
import ActionsSelectionPage from './pages/ActionsSelectionPage';
import GameTrackingPage from './pages/GameTrackingPage';
import HalfTimeSummaryPage from './pages/HalfTimeSummaryPage';
import FullTimeSummaryPage from './pages/FullTimeSummaryPage';
import TrainingSummaryPage from './pages/TrainingSummaryPage';
import CoachDashboard from './pages/CoachDashboard'; // נוסיף את הדף של המאמן

function App(){
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/match-setup" component={MatchSetupPage}/>
        <Route exact path="/actions-selection" component={ActionsSelectionPage}/>
        <Route exact path="/game-tracking" component={GameTrackingPage}/>
        <Route exact path="/half-time-summary" component={HalfTimeSummaryPage}/>
        <Route exact path="/full-time-summary" component={FullTimeSummaryPage}/>
        <Route exact path="/training-summary" component={TrainingSummaryPage}/>

        <Route exact path="/coach-dashboard" component={CoachDashboard}/>
      </Switch>
    </Router>
  );
}

export default App;
