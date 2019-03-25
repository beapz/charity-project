import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import history from "./history";
// import Callback from "./Callback/Callback";
import Auth from './Auth/Auth';

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
          <Route exact path="/" component={Books} />
          {/* <Route exact path="/books" render={(props) => <Books auth={auth} {...props} />}  component={Books} /> */}
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route
            path="/callback"
            render={props => {
              handleAuthentication(props);
              console.log(props)
              return <Books {...props} />;
              
            }}
          />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
