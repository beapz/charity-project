import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import history from "./history";
// import Callback from "./Callback/Callback";

import Auth from "./Auth/Auth";

//Page dependencies
// import UserDashboard from "./pages/UserDashboard.js";
import NoMatch from "./pages/NoMatch";
import Splash from "./pages/Splash";
import Find from "./pages/Find";
import BeginProject from "./pages/BeginProject";
import ProjectDetail from "./pages/ProjectDetail";
import Footer from "./components/Footer";

// TEST COMPONENT PAGE
import Test from './pages/ComponentTester';

const auth = new Auth();
// auth.login()

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

function App() {
  return (
    <Router history={history}>
      <div>
        <Nav auth={auth} />
        <Switch>
          <Route
            path="/callback"
            render={props => {
              handleAuthentication(props);
              //createUser(props);
              // console.log(props);

              return <Splash {...props} isLoggedIn={true} />;

            }}
          />
          <Route exact path="/" component={Splash} />
          <Route exact path="/users/:email" component={Splash} />
          <Route exact path="/create" component={BeginProject} />
          <Route exact path="/find/all" component={Find} />
          <Route exact path="/find/benefactor/:benefactorId" component={Find} />
          <Route exact path="/find/category/:categoryId" component={Find} />
          <Route exact path="/find/projects/:projectId" component={ProjectDetail} />
          {/* This route is for testing components */}
          <Route exact path='/testroute' component={Test} />
          
          {/* <Route exact path="/:user/dash" component={UserDashboard} /> */}
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
