const express = require("express");
const router = express.Router();

const { createTag } = require("../../../controllers/tags/create/createTag");

router.post("/tags/:id", createTag);

module.exports = router;
