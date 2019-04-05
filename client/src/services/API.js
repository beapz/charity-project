import axios from "axios";

export default {

  //==================PROJECT METHODS===========

  //To see all the available projects
  getProjects: function () {
    return axios.get('/api/projects/');
  },

  //To see all carousel projects
  getCarouselProjects: function () {
    return axios.get('/api/projects/all/carousel');
  },

  //Get projects by category
  searchCategory: function (categoryId) {
    return axios.get('/api/projects/all/category/' + categoryId);
  },

  //Get projects by benefactor
  searchBenefactor: function (benefactorId) {
    return axios.get('/api/projects/all/benefactor/' + benefactorId);
  },

  //Get details of project with given id
  getProjectDetails: function (id) {
    return axios.get('/api/projects/' + id);
  },

  createProject: function (projectData) {
    return axios.post('/api/projects/', projectData);
  },

  //=================USER METHODS===============

  //To see a users page when not user
  // getUserDetail: function(id) {
  //   return axios.get('/api/users/' + id);
  // },

  //To see your own dashboard as defined user
  // getUserDash: function() {
  //   return axios.get('/api/users/:id/dash');
  // },

  //To create new user
  createUser: function (UserData) {
    return axios.post('/api/users/', UserData);
  },

  //To search whether user of a certain email exists
  searchUserEmail: function (email) {
    return axios.get('/api/users/email/' + email);
  },

  findAllUsersForProject: function (projectData) {
    return axios.get('/api/users/userProject/' + projectData);
  },

  AddUserToProject: function(userProjectData) {
    return axios.post('../../api/users/create/userProject/', userProjectData);
  }
}
//TODO: investigate route to hit api earlier on

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