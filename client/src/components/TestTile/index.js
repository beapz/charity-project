import React from "react";
import Moment from 'react-moment';
// import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function TestTile({ title, category, date, photo_url }) {
    return (
        <div className='tile-full'>
            <Row className="flex-wrap-reverse">
                <Col size='md-12'>
                    <img className='img-fluid tile-image' src={photo_url} alt={title}></img>
                    <div className='tile-date'><Moment format="YYYY/MM/DD">{date}</Moment></div>
                </Col>
            </Row>
            <Row>
                <Col size="md-12 tile-content">
                    <div className="tile-title">{title}</div>
                    <div className='tile-category'>{category}</div>
                </Col>
            </Row>
        </div>
    );
}

export default TestTile;