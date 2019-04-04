import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";
import "./style.css";

class Nav extends Component {
  state = { 
    isLoggedIn: this.props.auth.isAuthenticated()

  };

  componentWillMount = () => {

    const isAuth = this.props.auth.isAuthenticated();
    console.log("authenticated",  isAuth);
    console.log("setsession storage profile", sessionStorage.profile);

    //this set state removes the mutable error but it leads login to incorrect page after login
    this.setState({
      isLoggedIn: isAuth
    });

    const { renewSession } = this.props.auth;

    if (localStorage.getItem("isLoggedIn") === "true") {
      renewSession();
    }
  }

  isAuthenticated = () => {
    return this.state.isLoggedIn || this.props.isLoggedIn;
  }

  goTo = (route) => {
    this.props.history.replace(`/${route}`);
  }

  login = () => {
    this.props.auth.login();
    this.setState({ isLoggedIn: true });
  }

  logout = () => {
    this.props.auth.logout();
    this.setState({ isLoggedIn: false });
  }

  render() {
    //const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a className="navbar-brand" href="/">
                <img
                  src="https://res.cloudinary.com/dlfl6vj4n/image/upload/v1554142559/timelenders.png"
                  width="40"
                  height="40"
                  alt=""
                />
              </a>
              <a href="/">TimeLender</a>
            </Navbar.Brand>
          </Navbar.Header>
          {!this.isAuthenticated() && (
            <Button
              bsStyle="primary"
              className="btn-margin nav-btn float-right"
              onClick={this.login}
            >
              Log In
            </Button>
          )}
          {this.isAuthenticated() && (
            <Button
              bsStyle="primary"
              className="btn-margin nav-btn float-right"
              onClick={this.logout}
            >
              Log Out
            </Button>
          )}
        </Navbar>
      </div>
    );
  }
}

export default Nav;
