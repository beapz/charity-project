import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../services/API";
import Tiles from "../components/Tiles";
// import Project from '../components/Project';
import Moment from 'react-moment';
import TestTile from "../components/TestTile";


import {PledgesHeader, PledgesData, PledgesFooter} from "../components/PledgesTable";
import Auth from "../Auth/Auth";
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../components/CheckoutForm';
import "./form.css"
import {Button} from 'react-bootstrap';
import {AddUserToProject} from '../components/Project';

class ProjectDetail extends Component {
  state = {
    project: {},
    userProject: {},
    userProjects: [],
    x: 0
  };
  updateMyState = () => {
    this.componentDidMount()
  }
  // When this component mounts, grab the PROJECT with the id of this.props.match.params.id
  //(this.props.match.params.id) <--- is how we get the ID from URL
  componentDidMount() {

    // this.getSessionStorageInfo();

    console.log("Logging this.props.match.params.projecID", this.props.match.params.projectId);
    API.getProjectDetails(this.props.match.params.projectId)
      .then(res =>
        this.setState({
          project: res.data,
          benefactorName: res.data.Benefactor.name,
          benefactorDescription: res.data.Benefactor.description,
          category: res.data.Category.name,


        })
      )
      .catch(err => console.log(err));
    API.findAllUsersForProject(this.props.match.params.projectId)
      .then(res =>
        this.setState({
          userProjects: res.data,
          user: res.data[0].User.first_name + " " + res.data[0].User.last_name,
          userHours: res.data[0].hours_pledged,

        })
      )
      .catch(err => console.log(err));
  }

  // getSessionStorageInfo = () => {

  //   //logging info from session storage
  //   console.log('Commit user hours to database')
  //   let localStorageObject = (JSON.parse(localStorage.getItem("profile")))
  //   console.log(localStorageObject.idTokenPayload); 
  //   console.log("email", localStorageObject.idTokenPayload.email); 

  //   API.searchUserEmail(localStorageObject.idTokenPayload.email)
  //     .then(userData => {
  //       console.log("UserData returned from DB ", userData.data[0])
  //       console.log("User ID returned from DB", userData.data[0].id)
  //       const userID = userData.data[0].id;
  //       this.setState({
  //         UserId: userID
  //       })
  //     });
  // }

  render() {
    // console.log(this.state.userHours);
    // console.log(this.state.userProjects);
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>

              <h1 class="text-center">
                Learn More About Lending Your Time to <br /><b>{this.state.benefactorName}</b>
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-6 md-offset-1">
            <Tiles title={this.state.project.title} className="body-quote rounded">
              <div className="projectImageTile">
                <img className="projDetailImage" src={this.state.project.photo_url} alt="{this.state.project.title}" width="100%"
                />
                <div><h5>{this.state.benefactorDescription}</h5></div>
              </div>
            </Tiles>
          </Col>
          <Col size="md-6 md-offset-1">
            <Tiles title="Project Details">
              <div className="projectDetailTile">
                <div>
                  {this.state.project.description}
                </div>
                <div>
                  Where: {this.state.project.location}
                </div>
                <div>

                  When:

                <Moment format="LLL" date={this.state.project.start_time} />

                  -
                <Moment format="LLL" date={this.state.project.end_time} />
                </div>
                <div>
                  Total Hours Needed: {this.state.project.total_hours}
                </div>
                <hr />
                <div>
                  Category: {this.state.category}
                </div>
                {/* <img src={this.state.project.photo_url} alt="{this.state.project.title}" height="200px" width="300px" /> */}
              </div>
            </Tiles>
            <Tiles title="Current Volunteer Hours">
              {/* <div className="userTimeTile"> */}

              <PledgesHeader />

              {this.state.userProjects.map(userProject => (
                <PledgesData
                  first_name={userProject.User.first_name}
                  last_name={userProject.User.last_name}
                  hours_pledged={userProject.hours_pledged}
                />

              ))}

              <hr />
              <PledgesFooter

                hours_pledged={this.state.userProjects.reduce((hours_pledged, userProject) => hours_pledged + userProject.hours_pledged, 0)}
                total_hours={this.state.project.total_hours}
              />
            </Tiles>
            <AddUserToProject
              updateMyState={this.updateMyState}
              email={getEmailFromLocalStorage()}
              projectId={this.state.project.id}
            />
            {/* <Tiles title="Commit To This Project">
              <input id="hoursinput"></input>
              <AddUserToProject />            
            </Tiles> */}

            <Tiles title="Would you like to add a monetary donation to this cause?">
          
              {/* <Checkout/> */}
            <StripeProvider apiKey="pk_test_K3KYvZ9DLO8ZE1pjNNaAq5Ru00FHcCuRjC">
                <div className="example">
                  <Elements>
                    <CheckoutForm />
                  </Elements>
                </div>
            </StripeProvider>
        </Tiles>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/"></Link>
            {/* <Link to="/">← Back to Home Page</Link> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProjectDetail;

function getEmailFromLocalStorage() {
  let localStorageObject = (JSON.parse(localStorage.getItem('profile')));
  return localStorageObject.idTokenPayload.email
}