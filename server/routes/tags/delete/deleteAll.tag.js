const express = require("express");
const router = express.Router();

const {
  deleteAllTagsById,
} = require("../../../controllers/tags/delete/deleteAll.tag");

router.delete("/tags/delete/all/:id", deleteAllTagsById);

module.exports = router;
