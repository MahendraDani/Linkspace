const express = require("express");
const router = express.Router();

const {
  getTagsOfUser,
} = require("../../../controllers/tags/read/getTagsOfUser");

router.get("/tags/all/:id", getTagsOfUser);

module.exports = router;
