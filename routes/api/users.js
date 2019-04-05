const router = require("express").Router();
const userController = require("../../controllers/userController");
const db = require("../../models");

//find all users
router.route('/')
    .get(userController.findAll)
    .post(userController.createUser);

    //added /email/ because path didn't know difference against other paths otherwise
router.route('/email/:email')
    .get(userController.checkUserByEmail);
    

//this is the /users/:id route
router.route('/:id')
    .get(userController.findUserDetail);


//this is the /users/:id/dash route
//THIS ROUTE WILL WORK LAST
router.route('/:id/dash')
    .get(userController.findUserDash);

//this gets users associated with a project
router.route('/userProject/:projectId')
.get(userController.findAllUsersForProject);

router.route('/create/userProject/')
.post(userController.addVolunteerToProject);


module.exports = router;

