const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Dear Brandon, Joe & Sahil, our problem was here. 
// We were mapping the route to /article here. 
// Because of the index.js, which already is mapping to /article, the effective route became /api/article/article
// Happy Thanks Giving :)
router.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

router.route("/:id")
  .delete(articlesController.remove);

module.exports = router;