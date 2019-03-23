const router = require("express").Router();
const bookRoutes = require("./books");
const projRoutes = require('./projects');

// Book routes
router.use("/books", bookRoutes);
router.use('/projects', projRoutes);

module.exports = router;
