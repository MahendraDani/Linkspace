const express = require("express");
const router = express.Router();

const {
  searchLinksByTagName,
} = require("../../controllers/search/link.search");

router.get("/search/links/:id", searchLinksByTagName);

module.exports = router;
