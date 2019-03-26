//Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Imports
import API from '../services/API';

//Components Needed
import Jumbotron from '../components/Jumbotron';
import { Col, Row, Container } from '../components/Grid';
import { List } from '../components/List';
import Project from '../components/Project';
import Tiles from '../components/Tiles';


class UserDashboard extends Component {

  state = {
    user: [],
    message: 'User Dash Will display Here'
  };

  componentDidMount() {
    this.getUserDash()
    };

  getUserDash = () => {
    API.getUserDash()
      .then(res => 
        this.setState({
          user: res.data
          }
        )
      )
      .catch(() => 
        this.setState({
            user: [],
            message: 'Uh oh our dashboard isnt loading properly'
          }
        )
      );
    };

  render() {
    return (
      <Container>
        <Row>
          <Col size='md-12'>
            <Jumbotron>
              <h1 className='text-center'>
                <strong>THIS IS THE TEST USER DASHBOARD SECTION</strong>
              </h1>
              <h2 className='text-center'>
              Fingers Crossed it works?!?!?!?!
              </h2>
            </Jumbotron>
          </Col>
        </Row>
          <Row>
            <Col size='md-12'>
              <Tiles title='This is only a test'>
                {this.state.user.length ? (
                  <List>
                    {this.state.user.map(project => (
                      <Project
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        hoursReq={project.hoursReq}
                      />
                      ))
                    }
                  </List>
                ) : (
                  <h2 className='text-center'>{this.state.message}</h2>
                  )
                }
              </Tiles>
            </Col>
          </Row>
      </Container>
    )
  }
}

export default UserDashboard;