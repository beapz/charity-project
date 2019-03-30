import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './style.css';

class Nav extends Component {
  state= {
    isLoggedIn: this.props.auth.isAuthenticated()
  }



  componentWillMount(){
    const isAuth = this.props.auth.isAuthenticated();
    this.state = {
      isLoggedIn: isAuth
    }
    // debugger;
  }

  isAuthenticated() {
    return this.state.isLoggedIn || this.props.isLoggedIn
  }

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
    this.setState({isLoggedIn:true})
  }

  logout() {
    this.props.auth.logout();
    this.setState({isLoggedIn:false})
  }

  componentDidMount() {
    console.log('authenticated', this.props.auth.isAuthenticated());
    
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    //const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              
              <a href="#">TimeLender</a>
            </Navbar.Brand>
            {/* <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button> */}
            
          </Navbar.Header>
          {
              !this.isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin nav-btn float-right"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                    {/* {isAuthenticated().toString()} */}
                  </Button>
                )
            }
            {
              this.isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin nav-btn float-right"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                    {/* {isAuthenticated().toString()} */}

                    
                  </Button>
                )
            }
        </Navbar>
      </div>
    );
  }
}

export default Nav;