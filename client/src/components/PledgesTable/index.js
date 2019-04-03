import React from "react";
import Moment from 'react-moment';
// import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import "./style.css";


export function PledgesHeader() {
    return (

        <Row className="PledgeesHeader">
            <Col size='md-6'>
                <div className='pledgeeHeader'><b>Volunteer</b></div>
            </Col>

            <Col size="md-6t">
                <div className="pledgeeHoursHeader"><b>Hours Pledged</b></div>
            </Col>
        </Row>
    );
}

export function PledgesData({ first_name, last_name, hours_pledged }) {
    return (

        <Row className="Pledgees">
            <Col size='md-6'>
                <div className='pledgeeName'>{first_name + " " + last_name}</div>
            </Col>

            <Col size="md-6t">
                <div className="pledgeeHours">{hours_pledged}</div>
            </Col>
        </Row>
    );
}

export function PledgesFooter({ hours_pledged, total_hours }) {
    return (
        <Row className="PledgeesFooter">

            <Col size="md-6">
                <div className="pledgeeHours"> <b>Hours to Goal: </b>{total_hours - hours_pledged}</div>
            </Col>
            <Col size='md-6t'>
                <div className='totalHoursPledged'><b>Total Hours Pledged: </b>{hours_pledged}</div>
            </Col>
        </Row>
    );
}







