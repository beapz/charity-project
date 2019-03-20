const router = require("express").Router();
const booksController = require("../../controllers/booksController");
const db = require("../../models");


// Matches with "/api/books"

  // router.get("/", function (req, res){
  //   db.Book.findAll({

  //   }).then (function (books){
  //     res.json(books);
  //   });
  // });

router.route("/")
  .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;
