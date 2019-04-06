const db = require("../models");

// Defining methods for the booksController
module.exports = {



    findAll: function (req, res) {
        db.User.findAll({
            // GET ALL USERS  
        }).then(function (userInfo) {
            res.json(userInfo);
        });
    },

    //this finds the dashboard of specific user (self)
    findUserDash: function (req, res) {
        let id = req.params.id;
        db.User.findOne({
            // GET ALL INFO WHERE ID = ID   
        }).then(function (userInfo) {
            res.json(userInfo);
        });
    },

    findAllUsersForProject: function (req, res) {
        console.log("this is user project check", req.params.projectId);
        db.UserProject.findAll({
            where: {
                ProjectId: req.params.projectId
            },
            include: [db.User]


        }).then(function (userProjectResults) {
            res.json(userProjectResults);
        });
    },


    //this finds the details of specific user (not self)
    findUserDetail: function (req, res) {
        const id = req.params.id;
        db.User.findOne({
            //database search where id=id
            where: {
                id: id
            }
        }).then(function (userDetail) {
            res.json(userDetail)
        })
    },

    //this creates the user in the database
    createUser: function (req, res) {
        let newUser = req.body;

        db.User.create(newUser)
            .then(userDetail => {
                res.send(userDetail)
            })
    },

    checkUserByEmail: function (req, res) {
        let email = req.params.email;
        console.log(email);
        db.User.findOne({
            where: {
                email: email
            }
        }).then(userDetail => {
            console.log(userDetail)
            res.json(userDetail)
        })
    },
    addUserToProject: function(req,res){
        let proj_obj={
            UserId: req.body.UserId,
            ProjectId: req.body.ProjectId,
            hours_pledged: req.body.hours_pledged
        }
        db.UserProject.create(proj_obj)
            .then(result=>res.json(result))
    }
};