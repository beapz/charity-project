const router = require("express").Router();
const booksController = require("../../controllers/projController");
const db = require("../../models");

router.route('/')
    .get(projController.findAll);

module.exports = router;

