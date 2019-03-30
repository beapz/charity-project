//Dependencies
import React, { Component } from 'react';

//Imports
import API from '../services/API';

//Components Needed
import Jumbotron from '../components/Jumbotron';
import { Col, Row, Container } from '../components/Grid';
import { List } from '../components/List';
import TestTile from '../components/TestTile';
import Tiles from '../components/Tiles';

class Test extends Component {

    state = {
        projects: [],
        message: `Tiles haven't loaded`
    };

    componentDidMount() {
        this.getCarouselProjects()
    };

    getCarouselProjects = () => {
        API.getCarouselProjects()
            .then(res =>{ 
                
                console.log(res.data);

                this.setState({
                    projects: res.data
                })
            }
            ).catch(() =>
                this.setState({
                    projects:[],
                    message: `Your search hasn't worked`
                })
            );
    };

    render() {
        return (
            <div>
                <Container>
                <Row>
                    {this.state.projects.map(project => (
                        <Col size='md-4'>
                            <TestTile
                            key={project.id}
                            title={project.title}
                            date = {project.date}
                            photo_url = {project.photo_url}
                            category = {project.categoryId}
                        />                                
                        </Col>                        
                    ))}
                </Row>
                </Container>
            </div>
        )
    }
}

export default Test;