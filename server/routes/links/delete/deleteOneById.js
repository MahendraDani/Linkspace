const express = require("express");
const router = express.Router();

const {
  deleteLinkById,
} = require("../../../controllers/links/delete/deleteOneById.link");

router.delete("/links/delete/:id", deleteLinkById);
module.exports = router;
