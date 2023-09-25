const express = require("express");
const router = express.Router();

const {
  deleteAllById,
} = require("../../../controllers/links/delete/deleteAllById.link");

router.delete("/links/delete/all/:id", deleteAllById);

module.exports = router;
