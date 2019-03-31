const router = require("express").Router();

const projController = require("../../controllers/projController");
const db = require("../../models");

//Route to see all available projects
//this is api/projects
router.route('/')
    .get(projController.findAll)
    .post(projController.create);
    
router.route('/create')
    .post(projController.create);

//Route to see a specific project details
//this is api/projects/id
router.route('/:id')
    .get(projController.findProjDetail);

//Get projects that are for carousel
router.route('/all/carousel')
    .get(projController.findCarouselProjects);

router.route('/all/:categoryId')
    .get(projController.findByCategory);



module.exports = router;

