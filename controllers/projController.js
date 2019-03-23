const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Project.findAll({

    }).then (function (projects){
      res.json(projects);
    });
  }
};