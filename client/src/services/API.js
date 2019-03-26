import axios from "axios";

export default {

  //==================PROJECT METHODS===========

  //To see all the available projects
  getProjects: function() {
    return axios.get('/api/projects/');
  },

  //To see all carousel projects
  getCarouselProjects: function() {
    return axios.get('/api/projects/all/carousel');
  },

  //Get details of project with given id
  getProjectDetails: function(id) {
    return axios.get('/api/projects/' + id);
  },

  createProject: function(projectData) {
    return axios.post('/api/projects/', projectData);
  },
  
  //=================USER METHODS===============

  //To see a users page when not user
  getUserDetail: function(id) {
    return axios.get('/api/users/' + id);
  },

  //To see your own dashboard as defined user
  getUserDash: function() {
    return axios.get('/api/users/:id/dash');
  },
}


  // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }

