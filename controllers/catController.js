const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Category.findAll({
    }).then(function (categories) {
      res.json(categories);
    });
  }
};