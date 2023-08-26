const express = require("express");
const router = express.Router();
const { indexContoller } = require("../controllers/index");

router.get("/home", indexContoller);

module.exports = router;
