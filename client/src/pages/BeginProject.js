import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../services/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn, SelectDropDown, SelectDropDownOption} from "../components/Form";
import "./form.css";



class BeginProject extends Component {
  
  constructor(props){
    

    super(props);

    this.logMe.bind(this);

    this.state = {
    projects: [],
    title: "",
    description: "",
    photo_url: "",
    total_hours: 0,
    start_time: 0,
    end_time: 0,
    location: "",
    ownerId: 0,
    benefactorId: 0,
    categoryId: 0
  };

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log("Inside handle input change");
  };
  
  logMe = () => {
    console.log(this.value);
  };

  handleFormSubmit = event => {
    this.getUserId();

    console.log("Inside handle Submit");
    console.log(this.state.title);
    console.log(this.state.description);
    console.log(this.state.photo_url);
    console.log(this.state.categoryId);
    console.log(this.state.benefactorId);
    console.log(this.state.ownerId);

    event.preventDefault();

    //Saving all states in a dummy object to see what is contained
    const newProj = {
        title: this.state.title,
        benefactorId: this.state.benefactorId,
        categoryId: this.state.categoryId,
        ownerId: this.state.ownerId,
        description: this.state.description,
        photo_url: this.state.photo_url,
        total_hours: this.state.total_hours,
        start_time: this.state.start_time,
        end_time: this.state.end_time,
        location: this.state.location
    }
    console.log(newProj);

    //If there is a title and a description, run API call
    if (this.state.title && this.state.description) {
      
      //API call to create project.
      API.createProject({
        title: this.state.title,
        benefactorId: this.state.benefactorId,
        categoryId: this.state.categoryId,
        ownerId: this.state.ownerId,
        description: this.state.description,
        photo_url: this.state.photo_url,
        total_hours: this.state.total_hours,
        start_time: this.state.start_time,
        end_time: this.state.end_time,
        location: this.state.location
      })
        .then(res => 
          console.log("Project create successful."))
         .then(window.location.href="/find/all") 
        .catch(err => console.log(err));
    }
  };

  getUserId = () => {
    let localStorageObject = (JSON.parse(localStorage.getItem('profile')))
      console.log(localStorageObject.idTokenPayload)
    };
  

  render() {
    return (
     <section className="wholePage">
          
          <Row>
          <Col size="md-12">
            <Jumbotron  className="Jumbo">
              <h1>Create a Project</h1>
            </Jumbotron>
        
            </Col>
        </Row>
         
            <Row>
          <Col size="md-6">
            <form span className="forms">
            <label>Project Information:
              <Input
                text="Title"
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
            </label>

              <div className="textArea">
              <textarea rows={10} cols={40}
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description (required)"
              />
              
              </div>
              <label> Photo Url:
              <Input
                value={this.state.photo_url}
                onChange={this.handleInputChange}
                name="photo_url"
                placeholder="Photo Url (Optional)"
              />
              </label>
              <div>
              <label> Total Hours Needed:
              <Input
                value={this.state.total_hours}
                onChange={this.handleInputChange}
                name="total_hours"
                placeholder="Total Hours (Optional)"
              />
              </label>
              </div>
              
              <label> Start Date and Time:
                <p id="descriptorText">(ex., 04/06/2019 9:00 AM)</p>
              <Input

                // value={this.state.start_time}
                onChange={this.handleInputChange}
                name="start_time"
                type="datetime-local"
              />
              </label>
              <section className="splitRight">
            
             <div>
             <label> End Date and Time:
             <p id="descriptorText">(ex., 04/07/2019 3:00 PM)</p>
              <Input
                // value={this.state.end_time}
                onChange={this.handleInputChange}
                name="end_time"
                type="datetime-local"
              />
              </label>
              </div>
              
              <div>
                <label> Location:
              <Input
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="Location (Optional)"
              />
              </label>
              </div>

              <label> Owner ID:
              <Input
                value={this.state.ownerId}
                onChange={this.handleInputChange}
                name="ownerId"
                placeholder="Owner Id (REQUIRED)"
              />
              </label>

              {/* <div>
              <label> Benefactor ID:
              <Input
                value={this.state.benefactorId}
                onChange={this.handleInputChange}
                name="benefactorId"
                placeholder="Benefactor Id (REQUIRED)"
              />
              </label>
              </div> */}
              <div>
              <label> What benefactor are you associated with?</label>
              <SelectDropDown 
              onChange={this.handleInputChange}
              name="benefactorId"
              value={this.state.benefactorId}
              >
                <SelectDropDownOption
                opt="Friends of the Parks Chicago"
                value="1"
                />
                <SelectDropDownOption
                opt="Common Pantry"
                value="2"
                />
                <SelectDropDownOption
                opt="Albany Park Community Center"
                value="3"
                />
                <SelectDropDownOption
                opt="Chicago Cares"
                value="4"
                />
                <SelectDropDownOption
                opt="Swedish Covenant"
                value="5"
                />
                <SelectDropDownOption
                opt="Dorothy's Can-Do Cafe"
                value="6"
                />
                <SelectDropDownOption
                opt="Doggie Heaven"
                value="7"
                />
                <SelectDropDownOption
                opt="PADS Chicago"
                value="8"
                />
                <SelectDropDownOption
                opt="My Block My Hood My City"
                value="9"
                />
                <SelectDropDownOption
                opt="Girls Who Code"
                value="10"
                />
                <SelectDropDownOption
                opt="Operation Gratitude"
                value="11"
                />
                <SelectDropDownOption
                opt="Albany Park Theatre Project"
                value="12"
                />
              </SelectDropDown>
               </div>
                       {/* <label>Category ID
              <Input
                value={this.state.categoryId}
                onChange={this.handleInputChange}
                name="categoryId"
                placeholder="Category Id (REQUIRED)"
              />
              </label> */}
              <label>Category:</label>
              <SelectDropDown 
              onChange={this.handleInputChange}
              name="categoryId"
              value={this.state.categoryId}
              >
                <SelectDropDownOption
                opt="Environmental"
                value="1"
                />
                <SelectDropDownOption
                opt="Hunger and Food Security"
                value="2"
                />
                <SelectDropDownOption
                opt="Education and Literacy"
                value="3"
                />
                <SelectDropDownOption
                opt="Crisis Support and Disaster Relief"
                value="4"
                />
                <SelectDropDownOption
                opt="Elder Care"
                value="5"
                />
                <SelectDropDownOption
                opt="Vulnerable Groups"
                value="6"
                />
                <SelectDropDownOption
                opt="Animal Welfare"
                value="7"
                />
                <SelectDropDownOption
                opt="Housing and Shelter"
                value="8"
                />
                <SelectDropDownOption
                opt="Community Projects"
                value="9"
                />
                <SelectDropDownOption
                opt="Children and Youth"
                value="10"
                />
              </SelectDropDown>
             
              {/* <DateTimePicker
              onChange={this.handleInputChange}
              name="start_time"
              value={this.state.start_time}
              />
              <DateTimePicker
              onChange={this.handleInputChange}
              name="end_time"
              value={this.state.end_time}
              /> */}
              {/* <div class="form-group row">
                <label for="example-datetime-local-input" class="col-2 col-form-label">Date and time</label>
                <div class="col-10">
                  <input class="form-control" type="time" value="" min="9:00" max="18:00" id="example-datetime-local-input"></input>
                </div>
              </div> */}

              <FormBtn 
                disabled={!(this.state.description && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Create Project
              </FormBtn>
              </section>
            </form>
            </Col>
          </Row>
            </section>
   
    );
  }
}

export default BeginProject;