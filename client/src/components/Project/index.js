import React from "react";
import Moment from 'react-moment';
import Tiles from "../Tiles";
import { Button } from 'react-bootstrap';
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import { Input } from "../Form";
import "./style.css";
import API from "../../services/API";

export function Project({ title, description, total_hours, date, start_time, end_time, location, category, benefactor, photo_url }) {
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
          <div>Benefactor: {benefactor} </div>
          <div>Date: <Moment format="dddd, MMMM Do" date={date} /></div>
          <div>Start Time: <Moment format="LT" date={start_time} /></div>
          <div>End Time: <Moment format="LT" date={end_time} /></div>
          <div>Location: {location}</div>
          <div>Category: {category}</div>
        </Col>
      </Row>
    </ListItem>
  );
}
function getEmailFromLocalStorage (){
  let localStorageObject = (JSON.parse(localStorage.getItem('profile')));
  return localStorageObject.idTokenPayload.email
}
export function AddUserToProject(props) {
  
  return (
    <Tiles title="Commit To This Project">
      
      <Button
        type="button"
        onClick={() => addUserToProjectApi(props)}
      >Commit</Button>
    </Tiles>
    //TODO: need to be able to pass hours pledged from hoursInput 

  );
}

function addUserToProjectApi(props) {
  let email = getEmailFromLocalStorage()
  let hours_pledged=prompt("enter hours")
  API.searchUserEmail(email).then(res =>
    {
      let userId = res.data.id
      API.AddUserToProject({
        UserId: userId,
        ProjectId: props.projectId,
        hours_pledged: parseInt(hours_pledged)
      }).then(res=>{
        props.updateMyState()
        })
  })
    .catch(err => console.log(err));
  


}