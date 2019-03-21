//Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Imports
import API from '../services/API';

//Components Needed
import Jumbotron from '../components/Jumbotron';
import { Col, Row, Container } from '../components/Grid';

const Splash = () => {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        THIS WILL HAVE CREATE AND FIND BUTTONS
                    </Jumbotron>
                </Col>

            </Row>
        </Container>

    )
};

export default Splash;
