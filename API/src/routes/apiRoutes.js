const express = require("express");
const apiController = require("../controllers/apiControllers");
const router = express.Router();

router.get("/blog-stats", apiController.getStats);
router.get("/blog-search", apiController.getSearch);

module.exports = router;