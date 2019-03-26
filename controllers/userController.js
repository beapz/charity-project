const db = require("../models");

// Defining methods for the booksController
module.exports = {

    //this finds the dashboard of specific user (self)
    findUserDash: function (req, res) {
        let id = req.params.id;
        db.Users.findOne({
            // GET ALL INFO WHERE ID = ID   
        }).then(function (userInfo) {
            res.json(userInfo);
        });
    },

    //this finds the details of specific user (not self)
    findUserDetail: function (req, res) {
        let id = req.params.id;
        db.Users.findOne({
            //database search where id=id
        }).then(function (userDetail) {
            res.json(userDetail)
        })
    },

    //this creates the user in the database
    createUser: function(req, res) {
        let id = req.params.id;
        db.Users
             db.Users.findOne({
            //database search where email=email
        }).then(function (userDetail) {
            res.json(userDetail)
        })
      },
};