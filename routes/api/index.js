//DEPENDENCIES
const router = require("express").Router();

//NECESSARY FILES
const projRoutes = require('./projects');
const userRoutes = require('./users');

//User Routes
router.use('/user/:id', userRoutes);
router.use('/users/:id/dash', userRoutes);

//Project Routes
router.use('/projects', projRoutes);
router.use('/projects/:id', projRoutes);



module.exports = router;
