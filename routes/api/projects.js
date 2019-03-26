const router = require("express").Router();

const projController = require("../../controllers/projController");
const db = require("../../models");

//Route to see all available projects
//this is api/projects
router.route('/')
    .get(projController.findAll);

//Route to see a specific project details
//this is api/projects/id
router.route('/:id')
    .get(projController.findProjDetail);

module.exports = router;

