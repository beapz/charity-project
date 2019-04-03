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

router.route('/all/category/:categoryId')
    .get(projController.findByCategory);

router.route('/all/benefactor/:benefactorId')
    .get(projController.findByBenefactor);





module.exports = router;

