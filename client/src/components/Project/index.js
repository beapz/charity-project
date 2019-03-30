import React from "react";
import Moment from 'react-moment';


import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function Project({ title, description, total_hours, date, start_time, end_time, location, category }) {
  return (
    
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <img className='img-fluid' src={photo_url} alt={title}></img>
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-8 md-10">
          <p><h3 className="font-italic">{title}</h3></p>
          <p>{description}</p>
          <p>Hours required: {total_hours}</p>
          <p>Category: {category}</p>
          <p>Date: <Moment format="dddd, MMMM Do" date={date} /></p>
          <p>Start Time: <Moment format="LT" date={start_time} /></p>
          <p>End Time: <Moment format="LT" date={end_time}/></p>
          <p>Location: {location}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Project;