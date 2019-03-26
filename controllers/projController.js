const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Project.findAll({
    }).then (function (projects){
      res.json(projects);
    });
  },

  findProjDetail: function(req, res) {
    let id = req.params.id;
    db.Project.findOne({
      //query by id
    }).then(function(projectDetails){
      res.json(projectDetails);
    })
  }
};