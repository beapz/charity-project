import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function TestTile({ title, category, date, photo_url }) {
    return (
        <div className='tile-full'>
            <Row className="flex-wrap-reverse">
                <Col size='md-12'>
                    <img className='img-fluid tile-image' src={photo_url} alt={title}></img>
                    <p className='tile-date'>03/15</p>
                </Col>
            </Row>
            <Row>
                <Col size="md-12 tile-content">
                    <p className="tile-title">{title}</p>
                    <p className='tile-category'>CATEGORY</p>
                </Col>
            </Row>
        </div>
    );
}

export default TestTile;