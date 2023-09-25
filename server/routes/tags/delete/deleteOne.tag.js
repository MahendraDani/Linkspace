const express = require("express");
const router = express.Router();

const {
  deleteTagById,
} = require("../../../controllers/tags/delete/deleteOne.tag");

router.delete("/tags/delete/:id", deleteTagById);

module.exports = router;
