const router = require("express").Router();
const userController = require("../../controllers/userController");
const db = require("../../models");

//this is the /users/:id route
router.route('/')
    .get(userController.findUserDetail)
    .post(userController.createUser)

//this is the /users/:id/dash route
router.route('/dash')
    .get(userController.findUserDash);

module.exports = router;

