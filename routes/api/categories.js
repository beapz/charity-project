const router = require("express").Router();
const catController = require("../../controllers/catController");
const db = require("../../models");

//This route is /API/categories
router.route('/')
    .get(catController.findAll);