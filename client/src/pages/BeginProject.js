import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../services/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
// import NewForm from "../components/NewForm";

class BeginProject extends Component {
  state = {
    projects: [],
    title: "",
    description: "",
    photo_url: "",
    total_hours: "",
    date: "",
    start_time: "",
    end_time: "",
    location: "",
    ownerId: "",
    benefactorId: "",
    categoryId: ""
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log("Inside handle input change");
  };

  handleFormSubmit = event => {
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
        date: this.state.date,
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
        date: this.state.date,
        start_time: this.state.start_time,
        end_time: this.state.end_time,
        location: this.state.location
      })
        .then(res => 
          console.log("Project create successful."))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Create a Project</h1>
            </Jumbotron>
            {/* <NewForm/> */}
            {/* Test form */}
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.description}
                onChange={this.handleInputChange}
                name="description"
                placeholder="Description (required)"
              />
              <Input
                value={this.state.photo_url}
                onChange={this.handleInputChange}
                name="photo_url"
                placeholder="Photo Url (Optional)"
              />
              <Input
                value={this.state.total_hours}
                onChange={this.handleInputChange}
                name="total_hours"
                placeholder="Total Hours (Optional)"
              />
              <Input
                value={this.state.date}
                onChange={this.handleInputChange}
                name="date"
                placeholder="Date (Optional)"
              />
              <Input
                value={this.state.start_time}
                onChange={this.handleInputChange}
                name="start_time"
                placeholder="Start Time (Optional)"
              />
              <Input
                value={this.state.end_time}
                onChange={this.handleInputChange}
                name="end_time"
                placeholder="End Time (Optional)"
              />
              <Input
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="Location (Optional)"
              />
              <Input
                value={this.state.ownerId}
                onChange={this.handleInputChange}
                name="ownerId"
                placeholder="Owner Id (REQUIRED)"
              />
              <Input
                value={this.state.benefactorId}
                onChange={this.handleInputChange}
                name="benefactorId"
                placeholder="Benefactor Id (REQUIRED)"
              />
              <Input
                value={this.state.categoryId}
                onChange={this.handleInputChange}
                name="categoryId"
                placeholder="Category Id (REQUIRED)"
              />
              <FormBtn
                disabled={!(this.state.description && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Create Project
              </FormBtn>
            </form>
          </Col>
          
        </Row>
      </Container>
    );
  }
}

export default BeginProject;