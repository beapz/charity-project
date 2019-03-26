import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../services/API";
import { List } from '../components/List';
import Tiles from '../components/Tiles';
import Project from '../components/Project'; 
import { FormBtn } from "../components/Form";


class Find extends Component {
  state = {
    projects: {}
  };
  
  componentDidMount() {
    //Display all projects. User can search by category if desired.
     console.log(this.props.match.params.category);
     this.getAllProjects()
  }

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

  searchCategory = () => {
   
    API.searchCategory(this.props.match.params.category)
    .then(res => this.setState({
      projects: res.data
    }))
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
               This page loads all projects. Search by a category (in url) if desired.
              </h1>
              
              <FormBtn onClick={this.searchCategory} type="success" className="input-lg">Search By Category</FormBtn>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12 md-offset-1">
          <Tiles title='This is only a test'>
                            {this.state.projects.length ? (
                                <List>
                                    {this.state.projects.map(project => (
                                        <Project
                                            key={project.id}
                                            title={project.title}
                                            description ={project.description}
                                            total_hours ={project.total_hours}
                                            date = {project.data}
                                            start_time= {project.start_time}
                                            end_time = {project.end_time}
                                            location = {project.location}
                                        />
                                    ))}
                                </List>
                            ) : (
                                <h2 className='text-center'>{this.state.message}</h2>
                            )
                        }
                        </Tiles>
          </Col>
        </Row>
       
      </Container>
    );
  }
}

export default Find;