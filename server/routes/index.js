const express = require("express");
const router = express.Router();
const { indexContoller } = require("../controllers/index");

router.get("/", indexContoller);

module.exports = router;
