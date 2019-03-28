import React from 'react'
import { Form } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { TextArea } from 'semantic-ui-react'
class CreateProject {
    state = {
      projectName:"",
      location: "",
      projectDesc: "",
      startDate: "",
      endDate:"",
      startTime:"",
      endTime:"",
      hoursNeed:"",
      name:"",
      email:"",
      number:""

    };

    handleFormSubmit = event => {
        //we don't want the form to submit, so we prevent the default behavior
        event.preventDefault();
        
        let projectName = this.state.projectName.trim();
        let location = this.state.location.trim();
        let projectDesc = this.state.projectDesc.trim()
        let startDate = this.state.startDate.trim()
        let endDate = this.state.endDate.trim()
        let startTime = this.state.startTime.trim()
        let endTime= this.state.endTime.trim()
        let hoursNeed = this.state.hoursNeed.trim()
        let name = this.state.name.trim()
        let email = this.state.email.trim()
        let number = this.state.number.trim()
          return;
        };
    
    render() {
        return (
  <Form>
   
    <Form.Field>
    value={this.state.projectName}
      <label>Project Information</label>
      <input placeholder='Project name' />
    </Form.Field>
    <Form.Field>
    value={this.state.location}
      <input placeholder='Location' />
    </Form.Field>
    
    <TextArea placeholder='Project Decription' />
    <Form.Field>
    value={this.state.startDate}
      <label>Start date</label>
      <input placeholder='Start Date (MM/DD/YY)' />
    </Form.Field>
    <Form.Field>
    value={this.state.endDate}
      <label>End date</label>
      <input placeholder='Start Date (MM/DD/YY)' />
    </Form.Field>
    <Form.Field>
    value={this.state.startTime}
      <label>Start Time</label>
      <input placeholder='Start Time (HH:MM) (AM/PM)' />
    </Form.Field>
    <Form.Field>
    value={this.state.endTime}
      <label>End Time</label>
      <input placeholder='End Time (HH:MM) (AM/PM)' />
    </Form.Field>
    
    <Form.Field>
    value={this.state.hoursNeed}
      <label>Total Hours Needed</label>
      <input placeholder='Total Hours Needed' />
    </Form.Field>
    <Form.Field>
    value={this.state.name}
      <label>Contact Information</label>
      <input placeholder='Name' />
      </Form.Field>
      <Form.Field>
      value={this.state.email}
      <input placeholder='Email' />
      </Form.Field>
      <Form.Field>
      value={this.state.number}
      <input placeholder='Phone Number' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
    
  </Form>
        );
    }
}
export default CreateProject