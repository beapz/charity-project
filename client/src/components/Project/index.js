import React from "react";
import Moment from 'react-moment';


import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";

function Project({ title, description, total_hours, date, start_time, end_time, location, category, benefactor, photo_url }) {
  return (
    
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <img className='img-fluid' src={photo_url} alt={title}></img>
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-8 md-10">
          <div><h3 className="font-italic">{title}</h3></div>
          <div>{description}</div>
          <div>Hours required: {total_hours}</div>
          {/* <div>Benefactor: {benefactor} </div> */}
          <div>Date: <Moment format="dddd, MMMM Do" date={date} /></div>
          <div>Start Time: <Moment format="LT" date={start_time} /></div>
          <div>End Time: <Moment format="LT" date={end_time}/></div>
          <div>Location: {location}</div>
          <div>Category: {category}</div>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Project;