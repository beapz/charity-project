//DEPENDENCIES
const router = require("express").Router();

//NECESSARY FILES
const projRoutes = require('./projects');
const userRoutes = require('./users');

//User Routes
router.use('/users', userRoutes);

//Project Routes
router.use('/projects', projRoutes);



module.exports = router;
