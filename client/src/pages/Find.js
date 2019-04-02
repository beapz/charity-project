import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../services/API";

import { FormBtn } from "../components/Form";
import TestTile from '../components/TestTile';
// import Dropdown from '../components/Dropdown';


class Find extends Component {
  state = {
    projects: []
  };

  //Display all projects. User can search by category if desired.
  componentDidMount() {
    //Console logging the category from URL ("/find/:category")
    // console.log(this.props);
    if (this.props.match.params.categoryId) {
      this.searchCategory()
    } else {
      this.getAllProjects()
    }
  }

  //This method runs as soon as page loads. It shows ALL projects.
  getAllProjects = () => {
    API.getProjects()
      .then(res =>
        // console.log(res.data.date)
        this.setState({
          projects: res.data
        })
      )
      .catch(() =>
        this.setState({
          projects: [],
          message: 'Uh oh our search is going wrong'
        })
      );
  };

  //This function runs on button click. It searches by the category in URL.
  searchCategory = () => {

    API.searchCategory(this.props.match.params.categoryId)
      .then(res => {
        this.setState({
          projects: res.data
        })
        // console.log("this is res.data" + res.data[0].Category.name);
      })
  };

  render() {
    return (
      <div className='bg-color' style={{
        backgroundColor: '#D8D3C8'
      }}>

        <Jumbotron>
          <h1>
            This page loads all projects. Search by a category (in url) if desired.
          </h1>

          {/* <FormBtn onClick={this.searchCategory} type="success" className="input-lg body-btn">Search By Category</FormBtn> */}
          {/* <Dropdown /> */}
        </Jumbotron>

        <Container>
          <Row>
            {this.state.projects.map(project => (
              <Col size='md-4'>
                <TestTile
                  id={project.id}
                  
                  title={project.title}
                  date={project.date}
                  photo_url={project.photo_url}
                  category={project.Category.name}
                />
              </Col>
            ))}
          </Row>

        </Container>

      </div>
    )
  }
}

export default Find;