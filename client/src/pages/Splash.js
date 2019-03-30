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



class Splash extends Component {

    state = {
        projects: [],
        message: 'Projects Will Display Here'
    };

    componentDidMount() {
        this.getCarouselProjects()
    };

    getCarouselProjects = () => {
        API.getCarouselProjects()
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

    render() {
        return (
            <Container>
                <Row>
                    <Col size='md-12'>
                        <Jumbotron>
                            <h1 className='text-center'>
                                <strong>THIS IS THE TEST DISPLAY SECTION</strong>
                            </h1>
                            <h2 className='text-center'>
                            Fingers Crossed it works?!?!?!?!
                            </h2>
                            <button className='btn btn-primary color-prim' style={{marginRight: 25, position: 250}}>Find Ways to Help</button>
                            <button className='btn btn-primary color-prim'>Create a Project</button>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size='md-12'>
                        <Tiles title='This is only a test'>
                            {this.state.projects.length ? (
                                <List>
                                    {this.state.projects.map(project => (
                                        <Project
                                            key={project.id}
                                            title={project.title}
                                            description ={project.description}
                                            total_hours ={project.total_hours}
                                            date = {project.date}
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
        )
    }
}

export default Splash;
