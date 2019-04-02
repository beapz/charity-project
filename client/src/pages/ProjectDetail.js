import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../services/API";
// import TestTile from "../components/TestTile";
import Tiles from "../components/Tiles";
// import Project from '../components/Project';
import Moment from 'react-moment';

class ProjectDetail extends Component {
  state = {
    project: {},


  };

  // When this component mounts, grab the PROJECT with the id of this.props.match.params.id
  //(this.props.match.params.id) <--- is how we get the ID from URL
  componentDidMount() {
    console.log(this.props.match.params.projectId);
    API.getProjectDetails(this.props.match.params.projectId)
      .then(res =>
        this.setState({
          project: res.data,
          benefactorName: res.data.Benefactor.name,
          benefactorDescription: res.data.Benefactor.description,
          category: res.data.Category.name
          // ,
          // userFirst: res.data.User.first_name
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    // console.log(this.state.project);
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>

              <h2>
                Learn More About Lending Your Time to {this.state.benefactorName}
              </h2>
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
            <Tiles title="Project Details">
              <div className="projectDetailTile">
                <div>
                  {this.state.project.description}
                </div>
                <div>
                  Where: {this.state.project.location}
                </div>
                <div>
                  When: <Moment format="LT" date={this.state.project.start_time} />
                  -
                <Moment format="LT" date={this.state.project.end_time} />
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
              {/* <article className="userTimeTile">
              Test: {this.state.userFirst}
              </article> */}
            </Tiles>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Home Page</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProjectDetail;