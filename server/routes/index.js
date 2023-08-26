const express = require("express");
const router = express.Router();
const { indexContoller } = require("../controllers/index");

router.get("/dashboard", indexContoller);

module.exports = router;
