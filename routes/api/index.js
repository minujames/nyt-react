const router = require("express").Router();
const articleRoutes = require("./articles");
const noteRoutes = require("./notes");

// Article routes
router.use("/article", articleRoutes);
router.use("/note", noteRoutes);

module.exports = router;
