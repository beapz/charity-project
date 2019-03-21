import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";

//Page dependencies
import UserDashboard from './pages/UserDashboard.js';
import NoMatch from './pages/NoMatch';
import Splash from './pages/Splash';
import Find from './pages/Find';
import BeginProject from '.pages/BeginProject';
import ProjectDashboard from './pages/ProjectDashboard';
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/create" component={BeginProject} />
          <Route exact path='/find' component={Find} />
          <Route exact path='/find/:projectId' component={ProjectDetail} />
          <Route exact path='/:user/dash/:projectId' component={ProjectDashboard} />
          <Route exact path='/:user/dash' component={UserDashboard} />

          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
