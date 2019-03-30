import React from "react";
import Moment from 'react-moment';
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function TestTile({ title, category, date, photo_url }) {
    return (
        <div className='tile-full'>
            <Row className="flex-wrap-reverse">
                <Col size='md-12'>
                    <img className='img-fluid tile-image' src={photo_url} alt={title}></img>
                    <p className='tile-date'><Moment format="YYYY/MM/DD">{date}</Moment></p>
                </Col>
            </Row>
            <Row>
                <Col size="md-12 tile-content">
                    <p className="tile-title">{title}</p>
                    <p className='tile-category'>{category}</p>
                </Col>
            </Row>
        </div>
    );
}

export default TestTile;