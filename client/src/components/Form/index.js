import React from 'react'
import { Form } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { TextArea } from 'semantic-ui-react'

const CreateProject = () => (
  <Form>
   
    <Form.Field>
      <label>Project Information</label>
      <input placeholder='Project name' />
    </Form.Field>\
    <Form.Field>
      <input placeholder='Location' />
    </Form.Field>
    
    <TextArea placeholder='Project Decription' />
    <Form.Field>
      <label>Start date</label>
      <input placeholder='Start Date (MM/DD/YY)' />
    </Form.Field>
    <Form.Field>
      <label>End date</label>
      <input placeholder='Start Date (MM/DD/YY)' />
    </Form.Field>
    <Form.Field>
      <label>Start Time</label>
      <input placeholder='Start Time (HH:MM) (AM/PM)' />
    </Form.Field>
    <Form.Field>
      <label>End Time</label>
      <input placeholder='End Time (HH:MM) (AM/PM)' />
    </Form.Field>
    
    <Form.Field>
      <label>Total Hours Needed</label>
      <input placeholder='Total Hours Needed' />
    </Form.Field>
    <Form.Field>
      <label>Contact Information</label>
      <input placeholder='Name' />
      <input placeholder='Email' />
      <input placeholder='Phone Number' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
    
  </Form>
)

export default CreateProject