const router = require("express").Router();
const booksController = require("../../controller/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post((req,res) => {
    console.log('hi there')
    booksController.create(req)
  });

// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(booksController.remove);

module.exports = router;
