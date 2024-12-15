import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import HomePage from './pages/HomePage';
import PlayerDashboard from './pages/PlayerDashboard';
import CoachDashboard from './pages/CoachDashboard';
import AnalystDashboard from './pages/AnalystDashboard';
import TrainingSummaryPage from './pages/TrainingSummaryPage'; // במידה ותרצה

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/player-dashboard" component={PlayerDashboard}/>
        <Route exact path="/coach-dashboard" component={CoachDashboard}/>
        <Route exact path="/analyst-dashboard" component={AnalystDashboard}/>
        <Route exact path="/training-summary" component={TrainingSummaryPage}/>

        {/* במידה ואין ראוט מתאים, נחזיר הביתה */}
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

