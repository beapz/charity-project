//Dependencies
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

//Imports
import API from '../services/API';

//Components Needed
import Jumbotron from '../components/Jumbotron';
import { Col, Row, Container } from '../components/Grid';
// import { List } from '../components/List';
import Project from '../components/Project';
// import Tiles from '../components/Tiles';
import SplashCarousel from '../components/Carousel';



class Splash extends Component {

    state = {
        projects: [],
        message: 'Projects Will Display Here'
    };


    componentDidMount() {
        this.getCarouselProjects();
    };

    getCarouselProjects = () => {
        API.getCarouselProjects()
            .then(res =>

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
            <div>
                <Jumbotron>
                    <Row>
                        <Col size='md-6'>
                            <div className = 'body-quote rounded'>
                                <h3 className='text-center'>
                                    Create a project to <strong>change your world</strong>
                                </h3>
                                <h4 className='text-center'>
                                    <strong>Help others</strong> on the same path
                                </h4>
                            </div>
                            
                            <a className='btn btn-primary body-btn' href="testroute"> Find Ways to Help </a>
                            <a className='btn btn-primary body-btn' href="/create">Create a Project</a>
                        </Col>
                        <Col size='md-6'>

                        </Col>

                    </Row>
                </Jumbotron>
                <Container>
                {/* testing space */}
                {/* <Row>

                    <Col size='md-12'>
                        <SplashCarousel>
                        </SplashCarousel>
                    </Col>
                </Row> */}
                    <Row>
                        <Col size='md-12'>
                            
                                {this.state.projects.length ? (
                                    <SplashCarousel>
                                        {this.state.projects.map(project => (
                                            <Project
                                                key={project.id}
                                                title={project.title}
                                                category={project.Category.name}
                                                benefactor={project.Benefactor.name}
                                                description={project.description}
                                                total_hours={project.total_hours}
                                                date={project.date}
                                                start_time={project.start_time}
                                                end_time={project.end_time}
                                                location={project.location}
                                                photo_url={project.photo_url}
                                            />
                                        ))}
                                    </SplashCarousel>
                                ) : (
                                        <h2 className='text-center'>{this.state.message}</h2>
                                    )
                                }
                           
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Splash;