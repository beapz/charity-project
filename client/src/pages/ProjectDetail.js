import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../services/API";
// import TestTile from "../components/TestTile";
import Tiles from "../components/Tiles";
// import Project from '../components/Project';

class ProjectDetail extends Component {
  state = {
    project: {},


  };

  // When this component mounts, grab the PROJECT with the id of this.props.match.params.id
  //(this.props.match.params.id) <--- is how we get the ID from URL
  componentDidMount() {
    // console.log(this.props.match.params.projectId);
    API.getProjectDetails(this.props.match.params.projectId)
      .then(res =>
        this.setState({
          project: res.data,

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
                Learn More About {this.state.project.title}
                {/* TODO: investigate grabbing benefactor data */}
              </h2>


            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-6 md-offset-1" className="flexbox">
            <Tiles title={this.state.project.title}>
            
              <article className="projectImageTile">
                {/* <h1> {this.state.project.title} </h1> */}
                <img className="projDetailImage" src={this.state.project.photo_url} alt="{this.state.project.title}" width="100%"
                />
              </article>
            </Tiles>
            <Tiles>
              <article className="projectDetailTile">
                <h1> {this.state.project.title} </h1>
                <div>
                  {this.state.project.description}
                </div>
                <div>
                  {this.state.project.location}
                </div>
                <div>
                  {this.state.project.start_time}
                </div>
                <div>
                  {this.state.project.end_time}
                </div>
                <div>
                  {this.state.project.total_hours}
                </div>
                <img src={this.state.project.photo_url} alt="{this.state.project.title}" height="200px" width="300px" />
              </article>
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