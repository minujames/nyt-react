const router = require("express").Router();
const notesController = require("../../controllers/notesController");

router.route("/:articleId")
  .post(notesController.create);

router.route("/:noteId/:articleId")
  .delete(notesController.remove);

module.exports = router;