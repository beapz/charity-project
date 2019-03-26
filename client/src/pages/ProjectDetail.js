import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../services/API";

class ProjectDetail extends Component {
  state = {
    project: {},
    id: 5
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    console.log(this.state.id);
    API.getProjectDetails(this.state.id)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

      // .then(res => this.setState({ book: res.data }))
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.project.title} 
              </h1>
              <h2>
                {this.state.project.description}
              </h2>
               
              
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1></h1>
              <p>
                {/* {this.state.book.synopsis} */}
              </p>
            </article>
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