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
              <img src="https://res.cloudinary.com/dlfl6vj4n/image/upload/c_thumb,w_200,g_face/v1553552037/timelenders.png" width="30" height="30" alt=""></img>
              <a href="#">Timelenders</a>
            </Navbar.Brand>
            {/* <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button> */}
            {
              !this.isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin nav-btn"
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
                    className="btn-margin nav-btn"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                    {/* {isAuthenticated().toString()} */}

                    
                  </Button>
                )
            }
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

export default Nav;