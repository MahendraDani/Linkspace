const express = require("express");
const router = express.Router();

const { createLink } = require("../../../controllers/links/create/create.link");
router.post("/links", createLink);

module.exports = router;
